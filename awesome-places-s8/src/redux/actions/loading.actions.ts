import {FluxStandardAction} from "flux-standard-action";
import {dispatch} from "@angular-redux/store";
import {Injectable} from "@angular/core";

export type LoadingBegin = FluxStandardAction<null, null>;
export type LoadingFinished = FluxStandardAction<null, null>;

@Injectable()
export class LoadingActions {

  static readonly LOADING_BEGIN = 'LOADING_BEGIN';
  static readonly LOADING_FINISHED = 'LOADING_FINISHED';

  @dispatch()
  loadingBegin = (): LoadingBegin => ({
    type: LoadingActions.LOADING_BEGIN,
    meta: null,
    payload: null
  });

  @dispatch()
  loadingFinished = (): LoadingFinished => ({
    type: LoadingActions.LOADING_FINISHED,
    meta: null,
    payload: null
  })
}
