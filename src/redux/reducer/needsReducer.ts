import { TNeed, TNeedsActions } from '../actionCreators/needsAction';
import {
  NEEDS_REQUEST_SUCCESSED,
  NEEDS_UPDATE,
  NEEDS_LOADED_REQUEST_SUCCESSED,
  NEEDS_FETCH,
} from '../constants';

export interface INeeds {
  isUpdate: boolean;
  isLoading: boolean;
  list: TNeed[] | null;
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
    case NEEDS_LOADED_REQUEST_SUCCESSED:
      // eslint-disable-next-line no-case-declarations
      let newList: (never | TNeed)[] = [];
      if (Array.isArray(state.list)) newList = state.list;

      return {
        ...state,
        isLoading: true,
        isUpdate: false,
        list: [...newList, ...action.data],
      };
    case NEEDS_FETCH:
      return {
        ...state,
        isLoading: false,
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
