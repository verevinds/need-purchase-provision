import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import ClaimsPage from './pages/ClaimsPage';
import MainPage from './pages/MainPage';
import NeedsPage from './pages/NeedsPage';
import NominationPage from './pages/NominationPage';
import PositionsPage from './pages/PositionsPage';
import StockPage from './pages/StockPage';

const App = () => {
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
