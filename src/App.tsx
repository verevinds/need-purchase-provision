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
import Filter from './components/Filter/Filter';
import { contractRequestSuccessed } from './redux/actionCreators/contractAction';
import { usersRequestSeccessed } from './redux/actionCreators/usersAction';
import { rolesRequestSuccessed } from './redux/actionCreators/rolesAction';

const App = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const roles = useSelector((state: IState) => state.roles.list);

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

          Axios.get(`http://srv-sdesk.c31.nccp.ru:8080/api/users/${res.data.number}`).then((resp: any) => {
            dispatch(authRequestSuccessed(resp.data));
          });
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
    dispatch(
      queryApi({
        route: 'libsRoles',
        actionSuccessed: rolesRequestSuccessed,
      }),
    );
    Axios.get(`http://srv-sdesk.c31.nccp.ru:8080/api/users/`).then((resp: any) => {
      dispatch(usersRequestSeccessed(resp.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(roles);
  }, [roles]);

  return (
    <BrowserRouter>
      <Header />
      <Filter />
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
  );
};

export default React.memo(App);
