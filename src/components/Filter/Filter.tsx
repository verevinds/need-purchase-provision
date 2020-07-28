import * as React from 'react';
import Submenu from '../Submenu/Submenu';
import './Filter.scss';

const Filter: React.FC = () => {
  const linksList = [
    { name: 'Статистика', url: '/main', link: 'statistics' },
    { name: 'Подписка на заказы', url: '/main', link: 'subscription-to-orders' },
    { name: 'О системе', url: '/main', link: 'about' },
    { name: 'Руководство оператора', url: '/main', link: 'operator-manual' },
  ];
  return (
    <div className='filter'>
      <Submenu {...{ linksList }} />
    </div>
  );
};

export default React.memo(Filter);
