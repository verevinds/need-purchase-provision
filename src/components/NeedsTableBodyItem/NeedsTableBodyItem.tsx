import * as React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import Fade from 'react-reveal/Fade';
import { TNeed, TNeedLogs } from '../../redux/actionCreators/needsAction';
import { IState } from '../../redux/reducer';
import { IUsers, TUser } from '../../redux/reducer/usersReducer';
import NeedModal from '../NeedModal/NeedModal.jsx';

interface INeedsTableBodyItem {
  need: TNeed;
}

const NeedsTableBodyItem: React.FC<INeedsTableBodyItem> = ({ need }) => {
  const { list: users }: IUsers = useSelector((state: IState) => state.users);
  const { contracts, needLogs } = need;

  const currentUser = React.useMemo(() => {
    return users?.find((user: TUser) => user.number === need.user);
  }, [need.user, users]);

  const dateCreate = React.useMemo(() => moment(need.datecreate * 1000).format('DD.MM.YYYY'), [
    need.datecreate,
  ]);

  const [show, setShow] = React.useState(false);
  const [numberPage, setNumberPage] = React.useState(0);

  const handleClickTabs = React.useCallback((number) => {
    setNumberPage(number);
  }, []);

  const handleToggle = React.useCallback(() => {
    setShow(!show);
    handleClickTabs(0);
  }, [show, handleClickTabs]);
  // const comment = React.useMemo(() => needLogs.find((log: TNeedLogs) => log.type === 11), [
  //   needLogs,
  // ]);

  // const commentUser = React.useMemo(
  //   () => users?.find((user: TUser) => user.number === comment?.user),
  //   [comment, users],
  // );
  return (
    <>
      <Fade bottom>
        <tr onClick={handleToggle}>
          <td data-label='Номер'>
            <div className='body__cell'>{need.id}</div>
          </td>
          <td data-label='Дата создания'>
            <div className='body__cell'>{dateCreate}</div>
          </td>
          <td data-label='Автор'>
            {users ? (
              <div className='body__cell'>
                {currentUser
                  ? `${currentUser?.name1} ${currentUser?.name2.charAt(
                      0,
                    )}. ${currentUser?.name3.charAt(0)}.`
                  : '-'}
              </div>
            ) : (
              <Loader type='ThreeDots' height={11} color='#45688e' />
            )}
          </td>
          <td data-label='Номер договора и заказа'>
            <div className=' body__document'>
              <span className='body__document__contract'>
                {contracts?.name}{' '}
                {contracts?.description ? `(${contracts?.description})` : undefined}
              </span>
              <span className='body__document__order'>{`заказ ${need.orders.name} ${
                need.orders.title ? `(${need.orders.title})` : ''
              }`}</span>
            </div>
          </td>
          <td data-label='Комментарий'>
            <div className=' body__comment'>
              <div className='body__comment__img'>
                <img
                  src={`http://www.c31.nccp.ru/img/foto/15959.jpg`}
                  alt={`http://www.c31.nccp.ru/img/foto/15959.jpg`}
                />
              </div>
              <span className='body__comment__text'>{'comment?.value'}</span>
            </div>
          </td>
          <td data-label='Выполнено'>
            <div className='body__cell'>
              <span>
                0 из <span>1</span>
              </span>
            </div>
          </td>
          <td data-label='Статус'>
            <div className='body__status'>
              <div className='body__status__icon work'>форм. заявки</div>
              <div className='body__status__date'>(29.07.2020)</div>
            </div>
          </td>
        </tr>
      </Fade>
      <NeedModal
        handleTabs={[numberPage, handleClickTabs]}
        show={show}
        onClose={handleToggle}
        need={need}
        currentUser={currentUser}
      />
    </>
  );
};

export default React.memo(NeedsTableBodyItem);
