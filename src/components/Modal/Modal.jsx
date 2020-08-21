import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';
import '../UserModal/UserModal.css';
import '../NeedModal/NeedModal.css';
import '../ModalBody/ModalBody.css';
import '../ModalFooter/ModalFooter.css';
import '../ModalHeader/ModalHeader.css';
import '../Tabs/Tabs.css';
import '../Table/Table.css';
import '../NeedInfo/NeedInfo.css';
import '../HistoryModal/HistoryModal.css';
import ModalBody from '../ModalBody/ModalBody.jsx';
import ModalFooter from '../ModalFooter/ModalFooter.jsx';
import ModalHeader from '../ModalHeader/ModalHeader.jsx';
import ModalWindow from './ModalWindow.jsx';

const Modal = (props) => {
  const { show, children, title, onClose, onSave } = props;
  const modal = useMemo(() => {
    if (!show) return children;

    let isHeader = false;
    let isFooter = false;
    const element = [];

    if (Array.isArray(children)) {
      children.forEach((el) => {
        if (el.type.name === 'ModalHeader') isHeader = true;
        if (el.type.name === 'ModalFooter') isFooter = true;
      });
    }
    if (!isHeader)
      element.unshift(
        <ModalHeader key='header' onClose={onClose}>
          <div className='_header-padding'>{title}</div>
        </ModalHeader>,
      );

    if (Array.isArray(children)) element.push(...children);
    else element.push(<ModalBody>{children}</ModalBody>);

    if (!isFooter && onSave)
      element.push(
        <ModalFooter key='footer'>
          <button className='btn _color-btn' type='button' onClick={onSave}>
            Отправить
          </button>
          {!onClose ? undefined : (
            <span type='button' className='_cursor-pointer' onClick={onClose}>
              Отменить
            </span>
          )}
        </ModalFooter>,
      );

    return element;
  }, [children, title, onClose, onSave, show]);

  if (show)
    return ReactDOM.createPortal(
      <div>
        <div className='modal_show'>
          <div className='modal__window'>{modal}</div>
        </div>
      </div>,
      document.getElementById('root'),
    );

  return null;
};

export default Modal;
