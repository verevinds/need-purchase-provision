import { FILTER_IRRELEVANT_UPDATE, FILTER_SHOW_ME_UPDATE } from '../constants';

export const filterIrrelevantUpdate = (check: boolean) => ({
  type: FILTER_IRRELEVANT_UPDATE,
  check,
});
export const filterShowMeUpdate = (check: boolean) => ({
  type: FILTER_SHOW_ME_UPDATE,
  check,
});

export type IFilterAction = {
  type: typeof FILTER_IRRELEVANT_UPDATE | typeof FILTER_SHOW_ME_UPDATE;
  check: boolean;
};
