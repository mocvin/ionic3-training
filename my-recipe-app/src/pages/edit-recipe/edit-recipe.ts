import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipesService} from "../../services/recipes";
import {Ingredient} from "../../models/ingredient";
import {Recipe} from "../../models/recipe";

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  recipe: Recipe;
  index: number;

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public  actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    if(this.mode === 'Edit') {
      console.log('Initializing form for editing.');
      this.recipe = this.navParams.get('recipe');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  onSubmit() {
    console.info('RecipeForm', this.recipeForm);
    const value = this.recipeForm.value;
    let ingredients = [];
    if (value.ingredients.length > 0) {
      ingredients = value.ingredients.map(name => new Ingredient(name, 1));
    }

    if (this.mode === 'Edit') {
      this.recipesService.removeRecipe(this.index);
    }

    this.recipesService.addRecipe({
      title: value.title,
      description: value.description,
      difficulty: value.difficulty,
      ingredients
    });
    this.recipeForm.reset();
    this.navCtrl.popToRoot();
  }

  private initializeForm() {
    let title = null;
    let description = null;
    let difficulty = 'Medium';
    let ingredients = [];

    if (this.mode == 'Edit') {
      title = this.recipe.title;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      ingredients = this.recipe.ingredients.map(ingredient => new FormControl(ingredient.name));
    }

    this.recipeForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'difficulty': new FormControl(difficulty, Validators.required),
      'ingredients': new FormArray(ingredients)
    });


  }

  onManageIngredients() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all Ingredients',
          role: 'destructive',
          handler: () => {

            let ingredientControls = (<FormArray> this.recipeForm.get('ingredients')).controls;
            if (ingredientControls.length > 0) {
              ingredientControls.length = 0;
              this.presentToast('All ingredients were removed.', 2000, 'bottom');
            }

          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  private createNewIngredientAlert() {
    return this.alertCtrl.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if (data.name.trim() == '' || data.name == null) {
              this.presentToast(
                'Insert a valid name!',
                3000,
                'middle');
            } else {
              (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl(data.name));
              this.presentToast('Ingredient added', 2000);
            }
          }
        }
      ]
    });
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
}
