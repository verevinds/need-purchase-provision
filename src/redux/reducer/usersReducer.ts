import { IUsersCurrentRequestSeccessed } from '../actionCreators/usersAction';
import { USERS_CURRENT_REQUEST_SUCCESSED } from '../constants';
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
    case USERS_CURRENT_REQUEST_SUCCESSED:
      return {
        ...state,
        current: { ...state.current, user: action.data[0], isUpdate: false },
      };

    default:
      return state;
  }
};

export default usersReducer;
