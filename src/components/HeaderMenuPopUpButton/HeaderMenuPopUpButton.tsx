import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export interface IHeaderMenuPopUpButton {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMenuPopUpButton: React.FC<IHeaderMenuPopUpButton> = (props) => {
  return (
    <div
      className={`popup__button ${props.show ? 'popup__button_hide' : ''}`}
      onClick={() => props.setShow(!props.show)}
    >
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default React.memo(HeaderMenuPopUpButton);
