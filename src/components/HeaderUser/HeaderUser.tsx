import * as React from 'react';

export interface IHeaderUser {}

const HeaderUser: React.FC<IHeaderUser> = () => {
  return <div id='user' className='header__user'></div>;
};

export default React.memo(HeaderUser);
