import {AwesomePlaceState} from "../state";
import {Action} from "redux";
import {PlaceActions} from "../actions/place.actions";
import {Place} from "../../models/place";

export function placeReducer(state: Place[],
                               action: Action): Place[]  {

  switch (action.type) {
    case PlaceActions.LOAD_PLACES:
      return [];
    default: return [];
  }
}
