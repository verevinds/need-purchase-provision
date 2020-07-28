import * as React from 'react';
import ListSubscriptions from '../../components/ListSubscriptions/ListSubscriptions';

const SubscriptionToOrders: React.FC = () => {
  return (
    <>
      <ListSubscriptions />
    </>
  );
};

export default React.memo(SubscriptionToOrders);
