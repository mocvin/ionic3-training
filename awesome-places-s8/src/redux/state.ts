import {Place} from "../models/place";

export interface AwesomePlaceState {
  places: Place[];
  loading: boolean;
}


export const INITIAL_STATE : AwesomePlaceState = {
  places: [],
  loading: false
};
