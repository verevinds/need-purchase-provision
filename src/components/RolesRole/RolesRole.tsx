import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { AppContext } from '../../AppContext';
import { TUser } from '../../redux/reducer/usersReducer';

export interface IRolesRole {
  title: string;
  users: TUser[] | null;
}

const RolesRole: React.FC<IRolesRole> = ({ title, users }) => {
  const {
    roles: { isModerator },
  } = React.useContext(AppContext);
  return (
    <div className='role'>
      <h6 className='role__title'>{`${title}:`}</h6>
      <div className='role__body'>
        {users?.map((user: TUser) => (
          <div className='role__body__item' key={user.number}>
            <span className='role__body__item__text'>
              {`${user.name1}`} {`${user.name2.charAt(0)}.`} {`${user.name3.charAt(0)}.`}
            </span>
            {isModerator && <FontAwesomeIcon icon={faTimes} className='role__body__item__close' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(RolesRole);
