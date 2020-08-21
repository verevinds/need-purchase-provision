import React, { memo } from 'react';

const Modal = () => {
  return (
    <div className='_user-body-width'>
      <div className='avatar' />
      <div className='info'>
        <h1>Мещеряков Алексей Александрович</h1>
        <h2>Энергетик</h2>
        {[
          { id: 1, name: 'Табельный номер:', text: '16' },
          { id: 2, name: 'Электронная почта:', text: 'maa00016@c31.nccp.ru', mail: true },
          { id: 3, name: 'Компьютер:', text: 'ENG-180' },
          { id: 4, name: 'День рождения:', text: '27 апреля 1974' },
          { id: 5, name: 'Внутренний телефон:', text: '05 86' },
          { id: 6, name: 'Внешний телефон:', text: '' },
        ].map((item) => (
          <div className='info__point' key={item.id}>
            <span className='point__label'>{item.name}</span>
            <span className='point__span'>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Modal);
