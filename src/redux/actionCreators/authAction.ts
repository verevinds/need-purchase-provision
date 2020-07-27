import constants from '../constants';
import { TUser } from '../reducer/usersReducer';

const { AUTH_REQUEST_SUCCESSED } = constants;

export const authRequestSuccessed = (data: TUser) => ({
  type: AUTH_REQUEST_SUCCESSED,
  data,
});

export interface IAuthRequestSuccessed {
  type: typeof AUTH_REQUEST_SUCCESSED;
  data: TUser;
}
