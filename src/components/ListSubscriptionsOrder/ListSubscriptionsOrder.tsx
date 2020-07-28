import * as React from 'react';
import { TOrder } from '../../redux/reducer/contractReducer';

export interface IListSubscriptionsOrder {
  order: TOrder;
}

const ListSubscriptionsOrder: React.FC<IListSubscriptionsOrder> = ({ order }) => {
  const [subscription, setSubscription] = React.useState(false);
  return (
    <div className='order' data-id={`${order.id}`} key={order.id}>
      <div className='order__item'>
        {`#${order.name} (${order.title}) `}
        {order.description ? <span className='order__item__description'>{`[${order.description}]`}</span> : undefined}
      </div>
      <div className='order__group-button'>
        <span
          className={`order__group-button__button ${subscription ? 'order__group-button__button_active' : ''}`}
          onClick={() => {
            setSubscription(!subscription);
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(ListSubscriptionsOrder);
