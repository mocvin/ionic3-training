import {Component, ViewChild} from '@angular/core';
import {IonicPage, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list";
import {Ingredient} from "../../models/ingredient";
import {select} from "@angular-redux/store";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  @select() ingredients;

  ingredientToEdit: Ingredient = new Ingredient();
  idxIngredientToEdit: number = -1;

  editMode = false;
  @ViewChild('f') form;

  constructor(private slService: ShoppingListService,
              private toastCtrl: ToastController) {}


  onAddItem(form: NgForm) {
    console.info('Form Value', form.value);
    if (this.editMode) {
      this.slService.removeItem(this.idxIngredientToEdit);
      this.editMode = false;
    }
    this.slService.addItem(form.value);
    this.presentToast('Added ingredient', 2000, 'middle');
    form.reset();
  }

  ionViewWillEnter(): void {
    //this.ingredients = this.slService.getItems();
  }

  presentToast(message = 'Ok',
               duration = 3000,
               position = 'bottom',
               showCloseButton = false,
               closeButtonText = 'Ok') {
    const toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position,
      showCloseButton,
      closeButtonText
    });

    toast.present();
  }

  onClickRemoveIngredient(index: number) {
    console.info('Delete', index);
    this.slService.removeItem(index);
  }

  onClickEditIngredient(index: number, ingredient: Ingredient) {
    Object.assign(this.ingredientToEdit, ingredient);
    this.idxIngredientToEdit = index;
    this.editMode = true;
  }

}
