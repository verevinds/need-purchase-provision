import { AUTH_REQUEST_SUCCESSED } from '../constants';
import { TUser } from '../reducer/usersReducer';

export const authRequestSuccessed = (data: TUser) => ({
  type: AUTH_REQUEST_SUCCESSED,
  data,
});

export interface IAuthRequestSuccessed {
  type: typeof AUTH_REQUEST_SUCCESSED;
  data: TUser;
}
