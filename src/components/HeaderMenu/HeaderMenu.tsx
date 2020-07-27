import * as React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderMenuPopUp from '../HeaderMenuPopUp/HeaderMenuPopUp';

export interface IHeaderMenu {
  url?: string;
  linksList: TLink[];
}
export type TLink = {
  name: string;
  link: string;
};
const HeaderMenu: React.FC<IHeaderMenu> = (props) => {
  const { url, linksList } = props;

  return (
    <div id='menu' className='header__menu'>
      <div className='header__menu_popup'>
        <HeaderMenuPopUp {...props} />
      </div>
      <div className='header__menu_inline'>
        {linksList.map((_link: TLink, _index: number) => (
          <NavLink
            exact
            to={`${url || ''}/${_link.link}`}
            className='header__menu__point'
            activeClassName='active'
            data-id={`${_index}`}
            key={_index}
          >
            {_link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default React.memo(HeaderMenu);
