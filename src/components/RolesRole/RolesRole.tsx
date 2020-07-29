import * as React from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { AppContext } from '../../AppContext';
import { TUser, IUsers } from '../../redux/reducer/usersReducer';
import { IState } from '../../redux/reducer';
import './RolesRole.scss';

export interface IRolesRole {
  title: string;
  localUsers: TUser[] | null;
}

const RolesRole: React.FC<IRolesRole> = ({ title, localUsers }) => {
  const [text, setText] = React.useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => setText(event.currentTarget.value);
  const { list: users }: IUsers = useSelector((state: IState) => state.users);
  const {
    roles: { isModerator },
  } = React.useContext(AppContext);

  const inputEl = React.useRef<HTMLInputElement>(null);
  const bodyEl = React.useRef<HTMLDivElement>(null);

  const onClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };

  const allegedUsers = React.useMemo(() => {
    return users?.filter(
      (user: TUser) => !!text && ~`${user.name1} ${user.name2} ${user.name3}`.toLowerCase().indexOf(text.toLowerCase()),
    );
  }, [users, text]);
  return (
    <div className='role'>
      <h6 className='role__title'>{`${title}:`}</h6>
      <div className='role__body' onClick={onClick} ref={bodyEl}>
        {localUsers?.map((user: TUser) => (
          <div className='role__body__item' key={user.number}>
            <span className='role__body__item__text'>
              {`${user.name1}`} {`${user.name2.charAt(0)}.`} {`${user.name3.charAt(0)}.`}
            </span>
            {isModerator && <FontAwesomeIcon icon={faTimes} className='role__body__item__close' />}
          </div>
        ))}
        <input
          className='role__body__input'
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={inputEl}
          type='text'
          value={text}
          style={{ width: `${(text.length + 1) * 8}px` }}
          onChange={onChange}
        />
        <div className='role__body__drop'>
          <ul>
            {allegedUsers
              ?.filter((user: TUser) => user.fired === 0)
              ?.map((user: TUser) => (
                <li key={user.number}>{user.name1}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RolesRole);
