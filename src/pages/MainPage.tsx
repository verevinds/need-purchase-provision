import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Statistics from '../layout/MainPage/Statistics';
import About from '../layout/MainPage/About';
import OperatorManual from '../layout/MainPage/OperatorManual';
import SubscriptionToOrders from '../layout/MainPage/SubscriptionToOrders';

const MainPage: React.FC = () => {
  return (
    <>
      <Redirect exact from='/main' to='/main/statistics' />

      <Route exact path='/main/statistics' component={Statistics} />
      <Route exact path='/main/subscription-to-orders' component={SubscriptionToOrders} />
      <Route exact path='/main/about' component={About} />
      <Route exact path='/main/operator-manual' component={OperatorManual} />
    </>
  );
};

export default React.memo(MainPage);
