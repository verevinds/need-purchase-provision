import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  needsFetch,
  needsLoadedRequestSuccessed,
  needsRequestSuccessed,
} from '../redux/actionCreators/needsAction';
import NeedsTable from '../components/NeedsTable/NeedsTable';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import { queryApi } from '../redux/actionCreators/queryApiAction';
import { IState } from '../redux/reducer';

const NeedsPage: React.FC = () => {
  const {
    auth: { user },
    needs: { isUpdate: isUpdateNeeds },
  }: IState = useSelector((state: IState) => state);
  const showMe = useSelector((state: IState) => state.filter.needs.showMe);
  const dispatch = useDispatch();
  const limit = 10;
  const [offset, setOffset] = React.useState(25 - limit);

  const onScrollList = (event) => {
    let scrollBottom =
      event.target.scrollTop + event.target.offsetHeight >
      event.target.scrollHeight - event.target.scrollHeight * 0.01;

    if (scrollBottom) {
      scrollBottom = false;
      setOffset(offset + limit);
      console.log('work');
    }
  };

  React.useLayoutEffect(() => {
    if (offset >= 25)
      if (showMe) {
        dispatch(
          queryApi({
            route: 'needs',
            actionSuccessed: needsLoadedRequestSuccessed,
            actionSend: needsFetch,
            params: { userNumber: user?.number },
          }),
        );
      } else {
        dispatch(
          queryApi({
            route: 'needs',
            actionSuccessed: needsLoadedRequestSuccessed,
            actionSend: needsFetch,
            params: { limit, offset },
          }),
        );
      }
  }, [dispatch, isUpdateNeeds, user, showMe, limit, offset]);

  return (
    <div onScroll={(event) => onScrollList(event)} className='need-page'>
      <FilterPanel />
      <NeedsTable />
    </div>
  );
};

export default React.memo(NeedsPage);
