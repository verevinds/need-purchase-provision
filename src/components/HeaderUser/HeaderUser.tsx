import * as React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/redux/reducer';
import { TUser } from 'src/redux/reducer/usersReducer';

export interface IHeaderUser {}

const HeaderUser: React.FC<IHeaderUser> = () => {
  const user: TUser = useSelector((state: IState) => state.auth.user);

  return (
    <div id='user' className='header__user'>
      <div
        className='header__user__img'
        style={{
          backgroundImage: `url('http://www.c31.nccp.ru/img/foto/${user?.number}.jpg')`,
        }}></div>
      <div className='header__user__name'>Веревин Денис Сергеевич</div>
    </div>
  );
};

export default React.memo(HeaderUser);
