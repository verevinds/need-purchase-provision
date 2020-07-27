import * as React from 'react';

export interface IHeaderLogo {}

const HeaderLogo: React.FC<IHeaderLogo> = () => {
  return (
    <div className='header__logo'>
      <a id='logo' href='http://www.c31.nccp.ru/'>
        <img src='//api.nccp-eng.ru/images/logo2.png' className='header__logo__img' />
      </a>
    </div>
  );
};

export default React.memo(HeaderLogo);
