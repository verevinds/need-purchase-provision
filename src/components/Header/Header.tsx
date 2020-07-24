import * as React from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import './Header.scss';
import HeaderUser from '../HeaderUser/HeaderUser';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div id='header' className='header'>
      <HeaderLogo />

      <HeaderMenu />

      <HeaderUser />
    </div>
  );
};

export default React.memo(Header);
