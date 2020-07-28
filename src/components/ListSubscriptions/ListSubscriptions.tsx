import * as React from 'react';
import { useSelector } from 'react-redux';
import { TContract } from '../../redux/reducer/contractReducer';
import { IState } from '../../redux/reducer';
import './ListSubscriptions.scss';

const ListSubscriptions: React.FC = () => {
  const contracts = useSelector((state: IState) => state.contracts.list);

  return (
    <>
      {contracts?.map((contract: TContract) => (
        <div className='contract' key={contract.id}>
          <div className='contract__block'>
            <span className='contract__title'>{`Договор ${contract.name} ${contract.description}`}</span>
            <div className='contract__button'>добавить заказ</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default React.memo(ListSubscriptions);
