import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {IngredientActions} from "../../actions/ingredient.action";
import {RecipeActions} from "../../actions/recipe.action";
import {EditRecipePage} from "../edit-recipe/edit-recipe";

/**
 * Generated class for the RecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  recipe: Recipe;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ingredientActions: IngredientActions,
              public recipeActions: RecipeActions,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
  }

  ionViewWillEnter(): void {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onClickToBuyIngredients(recipe: Recipe) {
    this.ingredientActions.addIngredients(recipe.ingredients);
    this.presentToast('Ingredients added to the shopping list!')
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

  onClickEditRecipe(recipe: Recipe, idx: number) {
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe, index: idx});
  }

  onClickDeleteRecipe() {
    this.recipeActions.removeRecipe(this.index);
    this.presentToast('Recipe deleted!');
    this.navCtrl.popToRoot();
  }
}
