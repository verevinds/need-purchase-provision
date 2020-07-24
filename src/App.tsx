import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Axios from 'axios';

import Header from './components/Header/Header';
import ClaimsPage from './pages/ClaimsPage';
import MainPage from './pages/MainPage';
import NeedsPage from './pages/NeedsPage';
import NominationPage from './pages/NominationPage';
import PositionsPage from './pages/PositionsPage';
import StockPage from './pages/StockPage';

const App = () => {
  const cookies = new Cookies();

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
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cookies]);

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/needs' component={NeedsPage} />
        <Route exact path='/positions' component={PositionsPage} />
        <Route exact path='/claims' component={ClaimsPage} />
        <Route exact path='/nominations' component={NominationPage} />
        <Route exact path='/stock' component={StockPage} />

        <Route exact path='/' component={MainPage} />
        <Route path='/main' component={MainPage} />
        <Route path='/main/:id' component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default React.memo(App);
