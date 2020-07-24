import * as React from 'react';

export interface IHeaderMenu {}

const HeaderMenu: React.FC<IHeaderMenu> = () => {
  return (
    <div id='menu' className='header__menu'>
      <div className='header__menu__point active' data-id='5'>
        Главная
      </div>
      <div className='header__menu__point' data-id='1'>
        Потребности
      </div>
      <div className='header__menu__point' data-id='2'>
        Позиции
      </div>
      <div className='header__menu__point' data-id='3'>
        Заявки
      </div>
      <div className='header__menu__point' data-id='4'>
        Наименования
      </div>
      <div className='header__menu__point' data-id='6'>
        Склад
      </div>
    </div>
  );
};

export default React.memo(HeaderMenu);
