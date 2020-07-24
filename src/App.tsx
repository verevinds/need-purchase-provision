import * as React from 'react';

const App = () => {
  return (
    <div id='body'>
      <div id='header'>
        <a id='logo' href='http://www.c31.nccp.ru/'>
          <img src='//api.nccp-eng.ru/images/logo2.png' />
        </a>

        <div id='menu'>
          <div className='point' data-id='5'>
            Главная
          </div>
          <div className='point' data-id='1'>
            Потребности
          </div>
          <div className='point' data-id='2'>
            Позиции
          </div>
          <div className='point' data-id='3'>
            Заявки
          </div>
          <div className='point' data-id='4'>
            Наименования
          </div>
          <div className='point' data-id='6'>
            Склад
          </div>
        </div>
        <div id='user'></div>
      </div>

      <div id='content'></div>
    </div>
  );
};

export default React.memo(App);
