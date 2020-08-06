import * as React from 'react';
import { useSelector } from 'react-redux';
import { INeeds } from '../../redux/reducer/needsReducer';
import { IState } from '../../redux/reducer';
import { TNeed } from '../../redux/actionCreators/needsAction';
import NeedsTableBodyItem from '../NeedsTableBodyItem/NeedsTableBodyItem';
import './NeedsTableBody.scss';
import { TUser } from '../../redux/reducer/usersReducer';

const NeedsTableBody: React.FC = () => {
  const { list }: INeeds = useSelector((state: IState) => state.needs);
  const user: TUser = useSelector((state: IState) => state.auth.user);
  const hideIrrelevant = useSelector((state: IState) => state.filter.needs.hideIrrelevant);
  const showMe = useSelector((state: IState) => state.filter.needs.showMe);

  const listFiltred = React.useMemo(() => {
    let changeList = list;

    if (Array.isArray(changeList)) {
      if (hideIrrelevant) changeList = changeList.filter((need: TNeed) => need.dateready) || null;
      if (showMe && user) {
        console.log(user);

        changeList =
          changeList.filter((need: TNeed) => {
            console.log(Number(need.user), Number(user.number));

            return Number(need.user) === Number(user.number);
          }) || null;
      }
    }
    return changeList;
  }, [list, hideIrrelevant, user, showMe]);

  return (
    <>
      <tbody className='body'>
        {listFiltred ? (
          listFiltred
            ?.sort((a, b) => (a.id < b.id ? 1 : -1))
            ?.map((need: TNeed) => {
              return <NeedsTableBodyItem need={need} key={need.id} />;
            })
        ) : (
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        )}
      </tbody>
    </>
  );
};

export default React.memo(NeedsTableBody);
