import { TContractRequestSuccessed } from '../actionCreators/contractAction';
import { CONTRACT_REQUEST_SUCCESSED } from '../constants';

export interface IContract {
  isUpdate: boolean;
  isLoading: boolean;
  list: TContract[] | null;
}

export type TContract = {
  id: number;
  name: string;
  description: string;
  visible: number;
  type: number;
  createdAt: string;
  updatedAt: string;
};

const initialContract: IContract = {
  isUpdate: false,
  isLoading: false,
  list: null,
};

const contractReducer = (state = initialContract, action: TContractRequestSuccessed) => {
  switch (action.type) {
    case CONTRACT_REQUEST_SUCCESSED:
      return {
        ...state,
        list: action.data,
        isUpdate: false,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default contractReducer;
