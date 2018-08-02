import {LOADING_INITIAL_STATE, LoadingState} from "../state";
import {Action} from "redux";
import {LoadingActions} from "../actions/loading.actions";

export function loadingReducer(state: LoadingState = LOADING_INITIAL_STATE,
                               action: Action): LoadingState  {

  switch (action.type) {
    case LoadingActions.LOADING_BEGIN:
      return { loading: true};
    case LoadingActions.LOADING_FINISHED:
      return { loading: false}
  }
  return state;
}
