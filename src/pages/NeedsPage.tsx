import * as React from 'react';
import Switch from '../components/Switch/Switch';
import Filter from '../components/Filter/Filter';
import Search, { ISearch } from '../components/Search/Search';

const NeedsPage: React.FC = () => {
  return (
    <Filter>
      <div className='filter__panel'>
        {[
          { placeholder: 'номера потребностей' },
          { placeholder: 'номер чертежа' },
          { placeholder: 'поиск по заказу' },
          { placeholder: 'поиск по автору' },
        ].map((item: ISearch) => (
          <Search placeholder={item.placeholder} key={Math.random()} width={item.width} />
        ))}
        <Switch size='7' text='Скрыть неактуальные' id='irrelevant' />
        <Switch size='7' text='Только мои' id='only-mine' checked />
      </div>
    </Filter>
  );
};

export default React.memo(NeedsPage);
