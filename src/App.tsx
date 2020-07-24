import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/needs/:id' component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default React.memo(App);
