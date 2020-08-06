import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '../Switch/Switch';
import Filter from '../Filter/Filter';
import Search, { ISearch } from '../Search/Search';
import { IState } from '../../redux/reducer';
import {
  filterIrrelevantUpdate,
  filterShowMeUpdate,
} from '../../redux/actionCreators/filterAction';

const FilterPanel: React.FC = () => {
  const dispatch = useDispatch();
  const hideIrrelevant = useSelector((state: IState) => state.filter.needs.hideIrrelevant);
  const showMe = useSelector((state: IState) => state.filter.needs.showMe);

  const handleIrrelevant = React.useCallback(
    (check) => {
      dispatch(filterIrrelevantUpdate(check));
      localStorage.setItem('irrelevant', JSON.stringify(check));
    },
    [dispatch],
  );

  const handleShowMe = React.useCallback(
    (check) => {
      dispatch(filterShowMeUpdate(check));

      localStorage.setItem('showMe', JSON.stringify(check));
    },
    [dispatch],
  );

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

      <Switch
        size='7'
        text='Скрыть неактуальные'
        id='irrelevant'
        checked={hideIrrelevant}
        onClick={handleIrrelevant}
      />
      <Switch size='7' text='Только мои' id='only-mine' checked={showMe} onClick={handleShowMe} />
    </Filter>
  );
};

export default React.memo(FilterPanel);
