import { USERS_CURRENT_REQUEST_SUCCESSED, USERS_REQUEST_SUCCESSED } from '../constants';
import { TUser } from '../reducer/usersReducer';

export const usersCurrentRequestSeccessed = (data: TUser[]) => ({
  type: USERS_CURRENT_REQUEST_SUCCESSED,
  data,
});
export const usersRequestSeccessed = (data: TUser[]) => ({
  type: USERS_REQUEST_SUCCESSED,
  data,
});

export interface IUsersCurrentRequestSeccessed {
  type: typeof USERS_CURRENT_REQUEST_SUCCESSED;
  data: TUser[];
}

export type IUsersCreator =
  | ReturnType<typeof usersCurrentRequestSeccessed>
  | ReturnType<typeof usersRequestSeccessed>;
