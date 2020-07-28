import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { TLink } from '../HeaderMenu/HeaderMenu';
import './Submenu.scss';

export interface ISubmenu {
  linksList: TLink[];
}

const Submenu: React.FC<ISubmenu> = ({ linksList }) => {
  return (
    <div className='submenu'>
      {linksList.map((_link: TLink, _index: number) => (
        <NavLink
          exact
          to={`${_link?.url === '/' ? '' : _link?.url || ''}/${_link.link}`}
          className='submenu__point'
          activeClassName='submenu__point_active'
          data-id={`${_index}`}
          key={_link.link}>
          {_link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default React.memo(Submenu);
