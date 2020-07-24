import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface IHeaderMenu {
  url?: string;
  linksList: TLink[];
}
type TLink = {
  name: string;
  link: string;
};
const HeaderMenu: React.FC<IHeaderMenu> = (props) => {
  const { url, linksList } = props;

  return (
    <div id='menu' className='header__menu'>
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
  );
};

export default React.memo(HeaderMenu);
