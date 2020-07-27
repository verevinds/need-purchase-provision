import { IAuthRequestSuccessed } from '../actionCreators/authAction';
import constants from '../constants';
import { TUser } from './usersReducer';

const { AUTH_REQUEST_SUCCESSED } = constants;

export interface IAuth {
  isRequest: boolean;
  isLoading: boolean;
  isUpdate: boolean;
  user: null | TUser;
}
const initialState: IAuth = {
  isRequest: false,
  isLoading: false,
  isUpdate: false,
  user: null,
};

export const authReducer = (state = initialState, action: IAuthRequestSuccessed) => {
  switch (action.type) {
    case AUTH_REQUEST_SUCCESSED:
      if (action.data[0] !== 'Error') {
        return {
          ...state,
          user: action.data,
          isLoading: true,
          isRequest: false,
          isUpdate: false,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
