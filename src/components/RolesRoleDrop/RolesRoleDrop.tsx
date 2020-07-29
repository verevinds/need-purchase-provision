import * as React from 'react';
import { TUser } from '../../redux/reducer/usersReducer';
import './RolesRoleDrop.scss';

export interface IRolesRoleDrop {
  allegedUsers?: TUser[];
  handleChoose: (id: number) => void;
  text: string;
}

const RolesRoleDrop: React.FC<IRolesRoleDrop> = ({ allegedUsers, handleChoose, text }) => {
  return (
    <div className='drop'>
      <div className={`drop__body ${text ? 'drop__body_show' : ''}`}>
        <ul>
          {allegedUsers?.length ? (
            allegedUsers
              ?.filter((user: TUser) => user.fired === 0)
              ?.map((user: TUser) => (
                <li
                  key={user.number}
                  className='drop__item'
                  onClick={() => handleChoose(user.number)}>
                  {user.name1} {user.name2} {user.name3}
                </li>
              ))
          ) : (
            <li className='drop__item drop__item_no-results'>{`Нет результатов "${text}"`}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(RolesRoleDrop);
