import { QUERY_API } from '../constants';

export interface IQueryApi {
  route?: string;
  actionSuccessed?: (
    data: any,
  ) => {
    type: string;
    data: any;
  };
  actionUpdate?: (type: string, data: any) => void;
  actionSend?: (type: string) => void;
  method?: string;
  data?: any;
  id?: number;
  params?: any;
  userNumber?: number;
}

export const queryApi = ({
  route,
  actionSuccessed,
  actionUpdate,
  actionSend,
  method,
  data,
  id,
  params,
  userNumber,
}: IQueryApi) => ({
  type: QUERY_API,
  route,
  actionSuccessed,
  actionUpdate,
  actionSend,
  data,
  id,
  method,
  params,
  userNumber,
});
