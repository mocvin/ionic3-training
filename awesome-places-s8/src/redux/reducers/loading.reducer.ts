import {Action} from "redux";
import {LoadingActions} from "../actions/loading.actions";
import {AwesomePlaceState} from "../state";

export function loadingReducer( state: false ,
                               action: Action): boolean  {

  switch (action.type) {
    case LoadingActions.LOADING_BEGIN:
      return false;
    case LoadingActions.LOADING_FINISHED:
      return true;
    default: return false;
  }
}
