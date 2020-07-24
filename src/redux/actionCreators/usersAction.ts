import constants from '../constants';
import { TUser } from '../reducer/usersReducer';

const { USERS_CURRENT_REQUEST_SUCCESSED } = constants;

export const usersCurrentRequestSeccessed = (data: TUser[]): IUsersCurrentRequestSeccessed => ({
  type: USERS_CURRENT_REQUEST_SUCCESSED,
  data,
});

export interface IUsersCurrentRequestSeccessed {
  type: typeof USERS_CURRENT_REQUEST_SUCCESSED;
  data: TUser[];
}

export type IActionCreator = IUsersCurrentRequestSeccessed;
