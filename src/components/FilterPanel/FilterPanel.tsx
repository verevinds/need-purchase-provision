import * as React from 'react';
import Switch from '../Switch/Switch';
import Filter from '../Filter/Filter';
import Search, { ISearch } from '../Search/Search';

const FilterPanel: React.FC = () => {
  return (
    <Filter>
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
    </Filter>
  );
};

export default React.memo(FilterPanel);
