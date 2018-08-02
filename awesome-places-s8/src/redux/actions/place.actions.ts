import {FluxStandardAction} from "flux-standard-action";
import {dispatch} from "@angular-redux/store";
import {Place} from "../../models/place";
import {Injectable} from "@angular/core";

export type LoadingPlaces = FluxStandardAction<null, null>;
export type AddPlaces = FluxStandardAction<Place[], null>;
export type RemovePlace = FluxStandardAction<number, null>;
export type RemoveAllPlaces = FluxStandardAction<null, null>;

@Injectable()
export class PlaceActions {

  static readonly LOAD_PLACES = 'LOAD_PLACES';
  static readonly ADD_PLACES = 'ADD_PLACES';
  static readonly REMOVE_PLACE = 'REMOVE_PLACE';
  static readonly REMOVE_ALL_PLACES = 'REMOVE_ALL_PLACES';

  @dispatch()
  loadPlaces = (): LoadingPlaces => ({
    type: PlaceActions.LOAD_PLACES,
    meta: null,
    payload: null
  });

  @dispatch()
  addPlaces = (places: Place[]): AddPlaces => ({
    type: PlaceActions.ADD_PLACES,
    meta: null,
    payload: places
  });

  @dispatch()
  removePlace = (id: number): RemovePlace => ({
    type: PlaceActions.REMOVE_PLACE,
    meta: null,
    payload: id
  });

  @dispatch()
  removeAllPlaces = (): RemoveAllPlaces => ({
    type: PlaceActions.REMOVE_ALL_PLACES,
    meta: null,
    payload: null
  })
}
