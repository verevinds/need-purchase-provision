import * as React from 'react';
import { useSelector } from 'react-redux';

import './Roles.scss';
import { IUsers, TUser } from '../../redux/reducer/usersReducer';
import RolesRole from '../RolesRole/RolesRole';
import { IState } from '../../redux/reducer';
import { IRoles, TRole } from '../../redux/reducer/rolesReducer';

const Roles: React.FC = () => {
  const { list: users }: IUsers = useSelector((state: IState) => state.users);
  const { list: roles }: IRoles = useSelector((state: IState) => state.roles);

  const usersByRole = React.useCallback(
    (extent: number) => {
      const usersModerators = roles?.filter((role: TRole) => parseInt(String(role.role & extent), 10) > 0);

      const filterUsers = users?.filter(
        (user: TUser) => usersModerators && ~usersModerators?.findIndex((role: TRole) => role.user === user.number),
      );

      return filterUsers?.sort((a, b) => (a.name1 > b.name1 ? 1 : -1)) || null;
    },
    [users, roles],
  );

  const moderators = React.useMemo(() => usersByRole(1), [usersByRole]);
  const chiefs = React.useMemo(() => usersByRole(2), [usersByRole]);
  const responsiblies = React.useMemo(() => usersByRole(4), [usersByRole]);
  const matching = React.useMemo(() => usersByRole(8), [usersByRole]);
  const approvers = React.useMemo(() => usersByRole(16), [usersByRole]);
  const storekeeper = React.useMemo(() => usersByRole(32), [usersByRole]);
  const economist = React.useMemo(() => usersByRole(64), [usersByRole]);
  // console.log('isApprover', isApprover);
  // console.log('isStorekeeper', isStorekeeper);
  // console.log('isEconomist', isEconomist);
  return (
    <div className='roles'>
      <h5>Роли в Системе</h5>
      <RolesRole title='Модераторы' users={moderators} />
      <RolesRole title='Начальники КО' users={chiefs} />
      <RolesRole title='Ответственные КО' users={responsiblies} />
      <RolesRole title='Согласующие' users={matching} />
      <RolesRole title='Утверждающие' users={approvers} />
      <RolesRole title='Кладовщики' users={storekeeper} />
      <RolesRole title='Экономисты' users={economist} />
    </div>
  );
};

export default React.memo(Roles);
