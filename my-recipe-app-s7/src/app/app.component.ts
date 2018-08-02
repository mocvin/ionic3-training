import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import firebase from 'firebase';
import {AuthService} from "../services/auth";
import {ShoppingListService} from "../services/shopping-list";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = SigninPage;
    tabsPage: any = TabsPage;
    signinPage: any = SigninPage;
    signupPage: any = SignupPage;

    @ViewChild('nav') navCtrl: NavController;
    private isAuthenticated: boolean;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private authService: AuthService,
                private slService: ShoppingListService,
                private menuCtrl: MenuController) {

        firebase.initializeApp({
            apiKey: "AIzaSyBwq-K9FqQuzouyj7fp1ymJMCyQnREl2Zk",
            authDomain: "ionic3-training.firebaseapp.com",
            databaseURL: "https://ionic3-training.firebaseio.com",
            projectId: "ionic3-training",
            storageBucket: "ionic3-training.appspot.com",
            messagingSenderId: "174354866330"
        });

        firebase.auth().languageCode = 'it';

        firebase.auth().onAuthStateChanged(user => {
            console.info('User', user);
            if (user) {
                this.isAuthenticated = true;
               this.rootPage = TabsPage;
               this.slService.getItems();
            } else {
                this.isAuthenticated = false;
                this.rootPage = SigninPage;
            }
        });

        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    onLoad(page) {
        this.navCtrl.setRoot(page);
        this.menuCtrl.close();
    }

    onLogout() {
        this.authService.logout();
        this.navCtrl.setRoot(SigninPage);
        this.menuCtrl.close();
    }

}

