import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {RecipeActions} from "../../actions/recipe.action";
import {select} from "@angular-redux/store";
import {Recipe} from "../../models/recipe";
import {IngredientActions} from "../../actions/ingredient.action";
import {RecipePage} from "../recipe/recipe";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  @select() recipes;

  constructor(public navCtrl: NavController,
              public recipeActions: RecipeActions,
              public ingredientActions: IngredientActions,
              public toastCtrl: ToastController) {

    recipeActions.loadRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'New'});
  }


  onClickToBuyIngredients(recipe: Recipe) {
    this.ingredientActions.addIngredients(recipe.ingredients);
    this.presentToast('Ingredients added!')
  }

  onClickToRemove(recipe: Recipe, idx: number) {
    this.recipeActions.removeRecipe(idx);
    this.presentToast('Recipe deleted');
  }

  private presentToast(message = 'Ok',
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

  onClickViewDescription(recipe: Recipe, index: number) {
    this.navCtrl.push(RecipePage, {'recipe': recipe, index})
  }
}
