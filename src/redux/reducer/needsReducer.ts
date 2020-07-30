import { TNeeds, TNeedsActions } from '../actionCreators/needsAction';
import { NEEDS_REQUEST_SUCCESSED, NEEDS_UPDATE } from '../constants';

export interface INeeds {
  isUpdate: boolean;
  isLoading: boolean;
  list: TNeeds[] | null;
}

const initialNeeds: INeeds = {
  isLoading: false,
  isUpdate: false,
  list: null,
};

export const needsReducer = (state = initialNeeds, action: TNeedsActions) => {
  switch (action.type) {
    case NEEDS_REQUEST_SUCCESSED:
      return {
        ...state,
        isLoading: true,
        isUpdate: false,
        list: action.data,
      };
    case NEEDS_UPDATE:
      return {
        ...state,
        isLoading: false,
        isUpdate: true,
      };
    default:
      return state;
  }
};
