import {Recipe} from "../models/recipe";
import {Ingredient} from "../models/ingredient";
import {RecipeActions} from "../actions/recipe.action";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipesService {
  constructor(private recipeActions: RecipeActions) {}

  addRecipe({title, description, difficulty, ingredients}) {
    this.recipeActions.addRecipes([new Recipe(title, description, difficulty, ingredients)]);
  }

  removeRecipe(index: number) {
    this.recipeActions.removeRecipe(index);
  }

}
