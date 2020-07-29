import * as React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TUser } from '../../redux/reducer/usersReducer';
import { AppContext } from '../../AppContext';
import './RolesRoleTag.scss';

export interface IRolesRoleTag {
  handleDelete?: (id: number) => void;
  user: TUser;
}

const RolesRoleTag: React.FC<IRolesRoleTag> = ({ handleDelete, user }) => {
  const {
    roles: { isModerator },
  } = React.useContext(AppContext);

  return (
    <div className='tag' key={user.number}>
      <span className='tag__text'>
        {`${user.name1}`} {`${user.name2.charAt(0)}.`} {`${user.name3.charAt(0)}.`}
      </span>
      {isModerator && user.number !== 81215 ? (
        <FontAwesomeIcon
          icon={faTimes}
          className='tag__close'
          onClick={() => handleDelete && handleDelete(user.number)}
        />
      ) : undefined}
    </div>
  );
};

export default React.memo(RolesRoleTag);
