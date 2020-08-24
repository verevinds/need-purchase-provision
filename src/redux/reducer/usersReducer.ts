import { IUsersCreator, IUsersCurrentRequestSeccessed } from '../actionCreators/usersAction';
import { USERS_CURRENT_REQUEST_SUCCESSED, USERS_REQUEST_SUCCESSED } from '../constants';
import { TPosition } from './positionReducer';

export interface IUsers {
  list: TUser[] | null;
  current: {
    user: TUser | null;
    isUpdate: boolean;
  };
  isUpdate: boolean;
}
export type TUser = {
  number: number;
  team: number;
  fired: number;
  sex: number;
  name1: string;
  name2: string;
  name3: string;
  phone1: string;
  phone2: string;
  email: string;
  exmail: string;
  computer: string;
  login: string;
  dob: string;
  department: {
    id: number;
    parent: number;
    name: string;
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

const usersReducer = (state = initialState, action: IUsersCreator) => {
  switch (action.type) {
    case USERS_CURRENT_REQUEST_SUCCESSED:
      return {
        ...state,
        current: { ...state.current, user: action.data[0], isUpdate: false },
      };
    case USERS_REQUEST_SUCCESSED:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};

export default usersReducer;
