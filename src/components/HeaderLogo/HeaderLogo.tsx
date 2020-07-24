import * as React from 'react';

export interface IHeaderLogo {}

const HeaderLogo: React.FC<IHeaderLogo> = () => {
  return (
    <a id='logo' className='header__logo' href='http://www.c31.nccp.ru/'>
      <img src='//api.nccp-eng.ru/images/logo2.png' />
    </a>
  );
};

export default React.memo(HeaderLogo);
