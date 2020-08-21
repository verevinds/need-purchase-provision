import React from 'react';

const Table = ({ lines, onClickInfo, onClickProduct }) => {
  return (
    <div className='body__table'>
      <div className='table__thead'>
        <div className='table__row'>
          <div className='row__cell' />
          <div className='row__cell'>Кол-во</div>
          <div className='row__cell'>Цена за единицу</div>
          <div className='row__cell'>Состояние позиции</div>
          <div className='row__cell' />
        </div>
      </div>

      {lines.map((line) => (
        <div key={line.id}>
          <div className='table__line-name'>
            <div className='line-name__item'>
              <span onClick={onClickProduct} className='_cursor-pointer'>
                {line.name}
              </span>
            </div>
          </div>

          <div className='table__row'>
            <div className='row__cell line-id_color'>{line.num}</div>
            <div className='row__cell'>{line.count}</div>
            <div className='row__cell'>{line.price}</div>
            <div className='row__cell wait'>{line.wait}</div>
            <div
              type='button'
              onClick={onClickInfo}
              className='row__cell _cursor-pointer'
              title='О позиции'>
              &#9776;
              {/* <i class="fas fa-bullhorn"></i> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
