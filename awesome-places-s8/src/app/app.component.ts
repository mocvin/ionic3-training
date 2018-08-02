import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoadingActions} from "../redux/actions/loading.actions";
import {select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @select() loading: Observable<boolean>;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen,
              private loadingAct: LoadingActions) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.loading.subscribe((val) => console.info('val', val));
    loadingAct.loadingBegin();
  }
}

