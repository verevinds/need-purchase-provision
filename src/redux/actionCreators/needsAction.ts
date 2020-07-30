import { NEEDS_REQUEST_SUCCESSED, NEEDS_UPDATE } from '../constants';

export type TNeeds = {
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
};

export const needsRequestSuccessed = (data: TNeeds) => ({ type: NEEDS_REQUEST_SUCCESSED, data });
export const needsUpdate = () => ({ type: NEEDS_UPDATE });

export interface INeedsRequestSeccessed {
  type: typeof NEEDS_REQUEST_SUCCESSED;
  data: TNeeds[];
}

export interface INeedsUpdate {
  type: typeof NEEDS_UPDATE;
  data: TNeeds[];
}

export type TNeedsActions = INeedsRequestSeccessed | INeedsUpdate;
