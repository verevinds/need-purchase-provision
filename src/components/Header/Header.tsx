import * as React from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import './Header.scss';
import HeaderUser from '../HeaderUser/HeaderUser';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const linksList = [
    { name: 'Главная', link: '' },
    { name: 'Потребности', link: 'needs' },
    { name: 'Позиции', link: 'positions' },
    { name: 'Заявки', link: 'claims' },
    { name: 'Наименования', link: 'nominations' },
    { name: 'Склад', link: 'stock' },
  ];
  return (
    <div id='header' className='header'>
      <div className='header_spinner'>
        <HeaderLogo />
        <HeaderMenu linksList={linksList} />
      </div>
      <HeaderUser />
    </div>
  );
};

export default React.memo(Header);
