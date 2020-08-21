import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  console.dir('Модалка');

  return ReactDOM.createPortal(
    <div>
      <div className='modal_show' onClick={onClose}>
        <div className='modal__window'>{children}</div>
      </div>
    </div>,
    document.getElementById('root'),
  );
};

export default Modal;
