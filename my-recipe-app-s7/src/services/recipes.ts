import {Recipe} from "../models/recipe";
import {RecipeActions} from "../actions/recipe.action";
import {Injectable} from "@angular/core";
import firebase from 'firebase';
import {AuthService} from "./auth";
import {NgRedux} from "@angular-redux/store";
import {MyRecipeState} from "../models/store";

@Injectable()
export class RecipesService {
  constructor(private recipeActions: RecipeActions,
              private authService: AuthService,
              private ngRedux: NgRedux<MyRecipeState>) {}

  addRecipe({title, description, difficulty, ingredients}) {
    this.recipeActions.addRecipes([new Recipe(title, description, difficulty, ingredients)]);
  }

  removeRecipe(index: number) {
    this.recipeActions.removeRecipe(index);
  }

  getRecipes() {
      const userId = this.authService.getActiveUser().uid;
      let shoppingListRef = firebase.database()
          .ref(`myrecipe/users/${userId}`)
          .child('recipes');
      shoppingListRef.once('value')
          .then( (snapshot) => {
              let recipes: Recipe[] = snapshot.val() || [];
              this.recipeActions.loadRecipesBegin();
              this.recipeActions.removeAllRecipes();
              this.recipeActions.addRecipes(recipes);
              this.recipeActions.loadRecipesFinished();
          });
  }

  storeList() {
      const userId = this.authService.getActiveUser().uid;
      let recipes = this.ngRedux.getState().recipes;
      let recipesRef = firebase.database()
          .ref(`myrecipe/users/${userId}`)
          .child('recipes');
      return recipesRef.set(recipes);
  }

}
