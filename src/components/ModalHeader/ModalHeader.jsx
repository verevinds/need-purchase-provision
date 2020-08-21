import React from 'react';

const ModalHeader = ({ children, onClose }) => {
  return (
    <div className='modal__header'>
      {children}
      <span type='button' onClick={onClose} className='header__close-btn'>
        &#10006;
      </span>
    </div>
  );
};

export default ModalHeader;
