import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {DevToolsExtension, NgRedux, NgReduxModule} from "@angular-redux/store";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PlacePage} from "../pages/place/place";
import {AddPlacePage} from "../pages/add-place/add-place";
import {SetLocationPage} from "../pages/set-location/set-location";
import {PlaceActions} from "../redux/actions/place.actions";
import {LoadingActions} from "../redux/actions/loading.actions";
import {combineReducers} from "redux";
import {loadingReducer as loading} from "../redux/reducers/loading.reducer";
import {placeReducer as places} from "../redux/reducers/place.reducer";
import {AwesomePlaceState, INITIAL_STATE} from "../redux/state";
import {AgmCoreModule} from "@agm/core";
declare var require;
var reduxLogger = require("redux-logger");

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwq-K9FqQuzouyj7fp1ymJMCyQnREl2Zk',
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlaceActions,
    LoadingActions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DevToolsExtension
  ]
})
export class AppModule {
  constructor(public store: NgRedux<AwesomePlaceState>, public devTools: DevToolsExtension) {
    let rootReducer = combineReducers({loading, places});
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [reduxLogger.createLogger()],
      devTools.isEnabled() ? [devTools.enhancer() ]: []
    );
  }

}
