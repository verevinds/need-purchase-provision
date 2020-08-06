import { IFilterAction } from '../actionCreators/filterAction';
import { FILTER_IRRELEVANT_UPDATE, FILTER_SHOW_ME_UPDATE } from '../constants';

export interface IFilter {
  needs: {
    hideIrrelevant: boolean;
    showMe: boolean;
  };
}

const initialFilter: IFilter = {
  needs: {
    hideIrrelevant: true,
    showMe: true,
  },
};

export const filterReducer = (state = initialFilter, action: IFilterAction) => {
  switch (action.type) {
    case FILTER_IRRELEVANT_UPDATE:
      return {
        ...state,
        needs: { ...state.needs, hideIrrelevant: action.check },
      };

    case FILTER_SHOW_ME_UPDATE:
      return {
        ...state,
        needs: { ...state.needs, showMe: action.check },
      };
    default:
      return state;
  }
};
