import * as React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppContext } from '../../AppContext';
import { TUser, IUsers } from '../../redux/reducer/usersReducer';
import { IState } from '../../redux/reducer';
import { queryApi } from '../../redux/actionCreators/queryApiAction';
import { rolesUpdate } from '../../redux/actionCreators/rolesAction';
import { IRoles, TRole } from '../../redux/reducer/rolesReducer';
import RolesRoleDrop from '../RolesRoleDrop/RolesRoleDrop';
import RolesRoleTag from '../RolesRoleTag/RolesRoleTag';
import './RolesRole.scss';

export interface IRolesRole {
  title: string;
  localUsers: TUser[] | null;
  extent: number;
}

const RolesRole: React.FC<IRolesRole> = ({ title, localUsers, extent }) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  const onChangeText = (event: React.FormEvent<HTMLInputElement>) =>
    setText(event.currentTarget.value);
  const { list: users }: IUsers = useSelector((state: IState) => state.users);
  const { list: roles }: IRoles = useSelector((state: IState) => state.roles);
  const {
    roles: { isModerator },
  } = React.useContext(AppContext);
  const inputEl = React.useRef<HTMLInputElement>(null);

  const updateRoles = useCallback(
    (id: number) => {
      const roleUser = roles?.find((role: TRole) => role.user === id);

      if (roleUser) {
        const dispatchRole = (user: number) => (role: number) =>
          dispatch(
            queryApi({
              route: 'libsRoles',
              method: 'post',
              data: { user, role },
              actionUpdate: rolesUpdate,
            }),
          );
        const selectedUser = roleUser?.user;
        const postRole = dispatchRole(selectedUser);

        return {
          up() {
            const newRole = Number(roleUser?.role) + Number(extent);
            postRole(newRole);
          },
          down() {
            const newRole = Number(roleUser?.role) - Number(extent);
            postRole(newRole);
          },
        };
      }

      console.error(`ОШИБКА: Пользователь с табельным номером ${id} не найден`);
    },
    [dispatch, extent, roles],
  );

  const onClickBody = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  const handleChoose = React.useCallback(
    (id: number) => {
      const upRole = updateRoles(id)?.up;
      if (upRole) upRole();

      setText('');
    },
    [updateRoles],
  );
  const handleDelete = React.useCallback((id: number) => updateRoles(id)?.down(), [updateRoles]);

  const allegedUsers = React.useMemo(() => {
    return users?.filter(
      (user: TUser) =>
        !!text &&
        ~`${user.name1} ${user.name2} ${user.name3}`.toLowerCase().indexOf(text.toLowerCase()),
    );
  }, [users, text]);

  return (
    <div className='role'>
      <h6 className='role__title'>{`${title}:`}</h6>
      <div
        className={`role__body ${isModerator ? '' : 'role__body_no-pointer'}`}
        onClick={isModerator ? onClickBody : undefined}>
        {localUsers?.map((user: TUser) => (
          <RolesRoleTag {...{ handleDelete, user }} key={user.number} />
        ))}
        <input
          className='role__body__input'
          ref={inputEl}
          type='text'
          value={text}
          style={{ width: `${(text.length + 1) * 8}px` }}
          onChange={onChangeText}
        />
        {isModerator ? <RolesRoleDrop {...{ allegedUsers, handleChoose, text }} /> : undefined}
      </div>
    </div>
  );
};

export default React.memo(RolesRole);
