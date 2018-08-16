import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {SetLocationPage} from "../set-location/set-location";
import {Location} from "../../models/location";
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the AddPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };

  locationIsSet: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private geoLocation: Geolocation,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {
  }

  onSubmit(form: NgForm) {
    console.info('form', form.value)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage,
      {
        location: this.location,
        isSet: this.locationIsSet
      });

    modal.onDidDismiss( (data) => {
      if (data) {
        this.location = data.location;
        this.locationIsSet = true;
      }
    });

    modal.present();
  }

  onLocate() {
    const loading = this.loadingCtrl.create({
      content: 'Getting location...'
    });
    loading.present();

    this.geoLocation.getCurrentPosition()
      .then((resp) => {
        loading.dismissAll();
        this.location = new Location(resp.coords.latitude, resp.coords.longitude);
        this.locationIsSet = true;
      }).catch(error => {
        loading.dismissAll();
        const toast = this.toastCtrl.create({
          message: `Could not get location: ${error.message}`,
          duration: 5000
        });

        toast.present();
        console.error('Error getting location', error)
    })
  }
}
