import {Place} from "../models/place";

export interface AwesomePlaceState {
  places?: Place[];
  loading?: boolean;
}
export interface LoadingState {
  loading: boolean;
}

export interface PlaceState {
  places: Place[];
}
export const LOADING_INITIAL_STATE: LoadingState = {
  loading: false
};

export const PLACE_INITIAL_STATE: PlaceState = {
  places: []
};
