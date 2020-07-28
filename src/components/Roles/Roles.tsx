import * as React from 'react';
import { useSelector } from 'react-redux';

import './Roles.scss';
import { IUsers } from '../../redux/reducer/usersReducer';
import RolesRole from '../RolesRole/RolesRole';
import { IState } from '../../redux/reducer';

const Roles: React.FC = () => {
  const { list: users }: IUsers = useSelector((state: IState) => state.users);
  return (
    <div className='roles'>
      <h5>Роли в Системе</h5>
      <RolesRole title='Модераторы' users={users} />
    </div>
  );
};

export default React.memo(Roles);
