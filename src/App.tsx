import * as React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import Axios from 'axios';

import Header from './components/Header/Header';
import ClaimsPage from './pages/ClaimsPage';
import MainPage from './pages/MainPage';
import NeedsPage from './pages/NeedsPage';
import NominationPage from './pages/NominationPage';
import PositionsPage from './pages/PositionsPage';
import StockPage from './pages/StockPage';
import { queryApi } from './redux/actionCreators/queryApiAction';
import { authRequestSuccessed } from './redux/actionCreators/authAction';
import { IState } from './redux/reducer';
import { contractRequestSuccessed } from './redux/actionCreators/contractAction';
import { usersRequestSeccessed } from './redux/actionCreators/usersAction';
import { rolesRequestSuccessed } from './redux/actionCreators/rolesAction';
import { TRole } from './redux/reducer/rolesReducer';
import { AppContext } from './AppContext';
import bitwiseRole from './js/bitwiseRole';
import { needsRequestSuccessed } from './redux/actionCreators/needsAction';
import { filterIrrelevantUpdate, filterShowMeUpdate } from './redux/actionCreators/filterAction';

const App = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const {
    roles: { list: roles, isUpdate: isUpdateRoles },
    auth: { user },
    needs: { isUpdate: isUpdateNeeds },
  }: IState = useSelector((state: IState) => state);
  const showMe = useSelector((state: IState) => state.filter.needs.showMe);
  const rolesSelect = React.useMemo(() => {
    const filterRolesByUser = roles?.filter((role: TRole) => role.user === user?.number);

    const accessByRole = (extent: number) =>
      filterRolesByUser ? Boolean(bitwiseRole(filterRolesByUser, extent).find) : false;

    const isModerator = accessByRole(1);
    const isChief = accessByRole(2);
    const isResponsible = accessByRole(4);
    const isMatching = accessByRole(8);
    const isApprovers = accessByRole(16);
    const isStorekeeper = accessByRole(32);
    const isEconomist = accessByRole(64);

    return {
      isModerator,
      isChief,
      isResponsible,
      isMatching,
      isApprovers,
      isStorekeeper,
      isEconomist,
    };
  }, [roles, user]);

  React.useLayoutEffect(() => {
    Axios.get(`${window.location.protocol}//api.nccp-eng.ru/?method=auth.start`, {
      headers: {
        accept: '*/*',
        'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        if (res.data) {
          cookies.set('login', res.data, { path: '/' });

          Axios.get(`http://srv-sdesk.c31.nccp.ru:8080/api/users/${res.data.number}`).then(
            (resp: any) => {
              dispatch(authRequestSuccessed(resp.data));
            },
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useLayoutEffect(() => {
    dispatch(
      queryApi({
        route: 'libsNumbersOne',
        actionSuccessed: contractRequestSuccessed,
      }),
    );

    Axios.get(`http://srv-sdesk.c31.nccp.ru:8080/api/users/`).then((resp: any) => {
      dispatch(usersRequestSeccessed(resp.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useLayoutEffect(() => {
    dispatch(
      queryApi({
        route: 'libsRoles',
        actionSuccessed: rolesRequestSuccessed,
      }),
    );
  }, [dispatch, isUpdateRoles]);

  React.useLayoutEffect(() => {
    if (showMe) {
      dispatch(
        queryApi({
          route: 'needs',
          actionSuccessed: needsRequestSuccessed,
          params: { userNumber: user?.number },
        }),
      );
    } else {
      dispatch(
        queryApi({
          route: 'needs',
          actionSuccessed: needsRequestSuccessed,
          params: { limit: 25, offset: 0 },
        }),
      );
    }
  }, [dispatch, isUpdateNeeds, user, showMe]);

  React.useLayoutEffect(() => {
    function getFilterFromLocalStorage(name: string, action: (check: boolean) => void) {
      const filterParameter = localStorage.getItem(name);

      if (filterParameter === 'false' || filterParameter === 'true')
        dispatch(action(JSON.parse(filterParameter)));
    }

    getFilterFromLocalStorage('irrelevant', filterIrrelevantUpdate);
    getFilterFromLocalStorage('showMe', filterShowMeUpdate);
  }, [dispatch]);

  return (
    <AppContext.Provider value={{ roles: rolesSelect }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from='/' to='/main' />
          <Route exact path='/needs' component={NeedsPage} />
          <Route exact path='/positions' component={PositionsPage} />
          <Route exact path='/claims' component={ClaimsPage} />
          <Route exact path='/nominations' component={NominationPage} />
          <Route exact path='/stock' component={StockPage} />

          <Route path='/main' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default React.memo(App);
