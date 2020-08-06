import * as React from 'react';
import ListSubscriptions from '../../components/ListSubscriptions/ListSubscriptions';
import './SubscriptionToOrders.scss';

const SubscriptionToOrders: React.FC = () => {
  return (
    <div className='subscription-to-orders'>
      <ListSubscriptions />
    </div>
  );
};

export default React.memo(SubscriptionToOrders);
