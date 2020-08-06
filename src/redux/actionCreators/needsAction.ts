import { TContract, TOrder } from '../reducer/contractReducer';
import {
  NEEDS_REQUEST_SUCCESSED,
  NEEDS_LOADED_REQUEST_SUCCESSED,
  NEEDS_UPDATE,
  NEEDS_FETCH,
} from '../constants';

export type TNeed = {
  id: number;
  user: number;
  number1: number;
  number2: number;
  datecreate: number;
  dateneed: number;
  dateready: number;
  datesend: number;
  draw: string;
  import: string;
  createdAt: string;
  updatedAt: string;
  contracts: TContract;
  orders: TOrder;
  needLogs: TNeedLogs[];
};

export type TNeedLogs = {
  id: number;
  value: string;
  user: number;
  type: number;
  timestamp: number;
  createdAt: string;
  updatedAt: string;
};

export const needsRequestSuccessed = (data: TNeed) => ({ type: NEEDS_REQUEST_SUCCESSED, data });
export const needsLoadedRequestSuccessed = (data: TNeed) => ({
  type: NEEDS_LOADED_REQUEST_SUCCESSED,
  data,
});
export const needsUpdate = () => ({ type: NEEDS_UPDATE });
export const needsFetch = () => ({ type: NEEDS_FETCH });
export interface INeedsByData {
  type:
    | typeof NEEDS_REQUEST_SUCCESSED
    | typeof NEEDS_UPDATE
    | typeof NEEDS_LOADED_REQUEST_SUCCESSED;
  data: TNeed[];
}
export interface INeedsLoading {
  type: typeof NEEDS_FETCH;
}
export type TNeedsActions = INeedsByData | INeedsLoading;
