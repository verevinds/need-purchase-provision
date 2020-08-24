import { POSITIONS_REQUEST_SUCCESSED, POSITIONS_UPDATE } from '../constants';

const initialState = {
  list: [],
  isUpdate: false,
  isLoading: false,
};

export type TPosition = {
  id: number;
  name: string;
};

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSITIONS_REQUEST_SUCCESSED:
      return {
        ...state,
        list: action.data,
        isUpdate: false,
        isLoading: true,
      };
    case POSITIONS_UPDATE:
      return {
        ...state,
        isUpdate: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default positionReducer;
