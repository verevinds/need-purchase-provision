import React, { useState, useCallback } from 'react';
import Modal from '../Modal/Modal.jsx';
import UserModal from '../UserModal/UserModal.jsx';

const Comments = ({ history }) => {
  const [user, setUser] = useState(false);

  const handleToggleUser = useCallback(() => {
    setUser(!user);
  }, [user]);

  return (
    <>
      <div className='body__history'>
        {history.map((item) => (
          <div className={`history__point ${item.comment ? '_comment' : ''}`} key={item.id}>
            <div className='history__avatar  _cursor-pntr' onClick={handleToggleUser} />
            <div>
              <div className='history__timestamp'>{item.time}</div>
              <div className='history__text'>{item.text}</div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={user} onClose={handleToggleUser} title='Информация о сотруднике'>
        <UserModal />
      </Modal>
    </>
  );
};

export default Comments;
