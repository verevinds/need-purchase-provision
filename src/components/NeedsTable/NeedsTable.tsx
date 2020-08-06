import * as React from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/reducer';
import NeedsTableBody from '../NeedsTableBody/NeedsTableBody';
import './NeedsTable.scss';

const NeedsTable: React.FC = () => {
  const isLoading = useSelector((state: IState) => state.needs.isLoading);
  const head = [
    'Номер',
    'Дата создания',
    'Автор',
    'Номер договора и заказа',
    'Комментарий',
    'Выполнено',
    'Статус',
  ];
  console.log(isLoading);
  return (
    <div>
      {
        //   isLoading ? undefined : (
        //   <div className='needs-table__spinner'>
        //     <Loader type='Circles' height={40} color='#45688e' />
        //     <p>Загрузка...</p>
        //   </div>
        // )
      }
      <table className='needs-table'>
        <thead className='needs-table__head'>
          <tr className='needs-table__head__row'>
            {head.map((title: string) => (
              <td className='needs-table__head__col' key={Math.random()}>
                {title}
              </td>
            ))}
          </tr>
        </thead>
        <NeedsTableBody />
      </table>
    </div>
  );
};

export default React.memo(NeedsTable);
