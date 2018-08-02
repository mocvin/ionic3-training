import {PLACE_INITIAL_STATE, PlaceState} from "../state";
import {Action} from "redux";
import {PlaceActions} from "../actions/place.actions";

export function placeReducer(state: PlaceState = PLACE_INITIAL_STATE,
                               action: Action): PlaceState  {

  switch (action.type) {
    case PlaceActions.LOAD_PLACES:
      return { places: []};
  }
  return state;
}
