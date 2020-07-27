import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IHeaderMenu, TLink } from '../HeaderMenu/HeaderMenu';
import HeaderMenuPopUpButton from '../HeaderMenuPopUpButton/HeaderMenuPopUpButton';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

export interface IHeaderMenuPopUp extends IHeaderMenu {}

const HeaderMenuPopUp: React.FC<IHeaderMenuPopUp> = (props) => {
  const { url, linksList } = props;
  const [show, setShow] = React.useState(false);

  return (
    <div className='popup'>
      <HeaderMenuPopUpButton {...{ show, setShow }} />
      <div className={`popup__sidebar ${show ? 'popup__sidebar_show' : ''}`}>
        <div className='popup__sidebar__links'>
          {linksList.map((_link: TLink, _index: number) => (
            <NavLink
              exact
              to={`${url || ''}/${_link.link}`}
              className='header__menu__point'
              activeClassName='active'
              data-id={`${_index}`}
              key={_index}
              onClick={() => setShow(false)}
            >
              {_link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderMenuPopUp);
