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
import Statistics from './layout/MainPage/Statistics';

const App = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const user = useSelector((state: IState) => state.auth.user);

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
          dispatch(
            queryApi({
              route: 'users',
              actionSuccessed: authRequestSuccessed,
              id: res.data.number,
            }),
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    console.log(user);
  }, [user]);

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
