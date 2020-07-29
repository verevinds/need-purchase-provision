import { RolesAction } from '../actionCreators/rolesAction';
import { RULES_REQUEST_SUCCESSED, RULES_UPDATE } from '../constants';

const initialRoles: IRoles = {
  isUpdate: false,
  isLoading: false,
  list: null,
};

export interface IRoles {
  isUpdate: boolean;
  isLoading: boolean;
  list: null | TRole[];
}

export type TRole = { user: number; role: number };

export const rolesReducer = (state = initialRoles, action: RolesAction) => {
  switch (action.type) {
    case RULES_REQUEST_SUCCESSED:
      return {
        ...state,
        list: action.data,
        isUpdate: false,
        isLoading: true,
      };
    case RULES_UPDATE:
      return {
        ...state,
        isUpdate: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
