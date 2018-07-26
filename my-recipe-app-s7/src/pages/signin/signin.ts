import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../services/auth";
import {NgForm} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  onSignin(form: NgForm) {
      const loading = this.loadingCtrl.create({
          content: 'Signing you in...'
      });
      loading.present();
    const {email, password} = form.value;
    this.authService.signin(email,password)
        .then(data => {
            loading.dismiss();
        })
        .catch(error =>  {
            console.info('firebase error response', error);
            loading.dismiss();
            this.alertCtrl.create({
                title: "Signin failed",
                message: error.message,
                buttons: ['OK']
            }).present()
        });
  }

}
