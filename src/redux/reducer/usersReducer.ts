import { IUsersCurrentRequestSeccessed } from '../actionCreators/usersAction';
import constants from '../constants';
import { TPosition } from './positionReducer';
import { combineReducers } from 'redux';

const { USERS_REQUEST_SUCCESSED, USERS_UPDATE, USERS_CURRENT_REQUEST_SUCCESSED, USERS_CURRENT_UPDATE } = constants;

export interface IUsers {
  list: TUser[] | null;
  current: {
    user: TUser | null;
    isUpdate: boolean;
  };
  isUpdate: boolean;
}
export type TUser = {
  accesses: any[];
  computer: string;
  createdAt: string;
  departmentId: number;
  dob: string;
  email: string;
  exmail: string;
  fired: number;
  login: string | null;
  name1: string;
  name2: string;
  name3: string;
  number: number;
  phone1: string;
  phone2: string;
  photo: string;
  positionId: number;
  sex: number;
  updatedAt: string;
  department: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  position: TPosition;
};

const initialState: IUsers = {
  list: null,
  current: {
    user: null,
    isUpdate: false,
  },
  isUpdate: true,
};

const usersReducer = (state = initialState, action: IUsersCurrentRequestSeccessed) => {
  switch (action.type) {
    case USERS_REQUEST_SUCCESSED:
      return {
        ...state,
        list: action.data,
        isUpdate: false,
      };
    case USERS_CURRENT_REQUEST_SUCCESSED:
      return {
        ...state,
        current: { ...state.current, user: action.data[0], isUpdate: false },
      };
    case USERS_UPDATE:
      return {
        ...state,
        isUpdate: true,
      };
    case USERS_CURRENT_UPDATE:
      return {
        ...state,
        current: { ...state.current, isUpdate: true },
      };
    default:
      return state;
  }
};

export default usersReducer;
