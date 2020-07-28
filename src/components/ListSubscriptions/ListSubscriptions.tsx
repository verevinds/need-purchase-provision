import * as React from 'react';
import { useSelector } from 'react-redux';
import { TContract, TOrder } from '../../redux/reducer/contractReducer';
import { IState } from '../../redux/reducer';
import './ListSubscriptions.scss';
import ListSubscriptionsOrder from '../ListSubscriptionsOrder/ListSubscriptionsOrder';

const ListSubscriptions: React.FC = () => {
  const contracts = useSelector((state: IState) => state.contracts.list);
  return (
    <>
      {contracts?.map((contract: TContract) => (
        <div className='subscriptions' key={contract.id}>
          <div className='contract'>
            <span className='contract__title'>{`Договор ${contract.name} ${contract.description}`}</span>
            <span className='contract__button'>добавить заказ</span>
          </div>
          {contract.orders?.map((order: TOrder) => (
            <ListSubscriptionsOrder order={order} key={order.id} />
          ))}
        </div>
      ))}
    </>
  );
};

export default React.memo(ListSubscriptions);
