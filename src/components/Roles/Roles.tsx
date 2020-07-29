import * as React from 'react';
import { useSelector } from 'react-redux';

import './Roles.scss';
import RolesRole from '../RolesRole/RolesRole';
import { IState } from '../../redux/reducer';
import { IUsers, TUser } from '../../redux/reducer/usersReducer';
import { IRoles, TRole } from '../../redux/reducer/rolesReducer';
import bitwiseRole from '../../js/bitwiseRole';

const Roles: React.FC = () => {
  const { list: users }: IUsers = useSelector((state: IState) => state.users);
  const { list: roles }: IRoles = useSelector((state: IState) => state.roles);

  const usersByRole = React.useCallback(
    (extent: number) => {
      const usersModerators = bitwiseRole(roles, extent).filter;
      const userWithRole = (user: TUser) =>
        usersModerators && ~usersModerators?.findIndex((role: TRole) => role.user === user.number);

      const filterUsers = users?.filter(userWithRole);

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
      <RolesRole title='Модераторы' localUsers={moderators} />
      <RolesRole title='Начальники КО' localUsers={chiefs} />
      <RolesRole title='Ответственные КО' localUsers={responsiblies} />
      <RolesRole title='Согласующие' localUsers={matching} />
      <RolesRole title='Утверждающие' localUsers={approvers} />
      <RolesRole title='Кладовщики' localUsers={storekeeper} />
      <RolesRole title='Экономисты' localUsers={economist} />
    </div>
  );
};

export default React.memo(Roles);
