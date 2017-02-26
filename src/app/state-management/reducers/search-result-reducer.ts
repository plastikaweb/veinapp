import { ActionReducer, Action } from '@ngrx/store';

import { SearchResultState, INITIAL_SEARCH_RESULT_STATE } from '../states/search-result-state';
import { WARN_SEARCH_RESULT } from '../actions/search-result-action';

export const SearchResultReducer: ActionReducer<SearchResultState> =
  (state: SearchResultState = INITIAL_SEARCH_RESULT_STATE,
   action: Action): SearchResultState => {
    switch (action.type) {
      case WARN_SEARCH_RESULT:
        return action.payload;
      default:
        return state;
    }
  };