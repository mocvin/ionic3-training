import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

    constructor(private authService: AuthService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {}

    onSignup(form: NgForm) {
        const loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        const {email, password} = form.value;
        loading.present();
        this.authService.signup(email, password)
            .then(data => {
                loading.dismiss()
            })
            .catch(error =>  {
                console.info('firebase error response', error);
                loading.dismiss();
                this.alertCtrl.create({
                    title: "Signup failed",
                    message: error.message,
                    buttons: ['OK']
                }).present()
            });
    }
}
