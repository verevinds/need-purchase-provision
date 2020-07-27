import * as React from 'react';
import Submenu from '../Submenu/Submenu';
import './Filter.scss';

export interface IFilter {}

const Filter: React.FC<IFilter> = () => {
  const linksList = [
    { name: 'Статистика', url: '/main', link: 'statistics' },
    { name: 'Подписка на заказы', url: '/main', link: 'subscription-to-orders' },
    { name: 'О системе', url: '/main', link: 'about' },
    { name: 'СУОД', url: '/main', link: 'suod' },
    { name: 'Руководство оператора', url: '/main', link: 'operator-manual' },
  ];
  return (
    <div className='filter'>
      <Submenu {...{ linksList }} />
    </div>
  );
};

export default React.memo(Filter);
