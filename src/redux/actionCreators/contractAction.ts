import { CONTRACT_REQUEST_SUCCESSED } from '../constants';
import { TContract } from '../reducer/contractReducer';

export const contractRequestSuccessed = (data: TContract[]) => ({ type: CONTRACT_REQUEST_SUCCESSED, data });

export type TContractRequestSuccessed = ReturnType<typeof contractRequestSuccessed>;
