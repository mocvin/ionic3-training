import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";

export interface MyRecipeState {
  recipes: Recipe[];
  ingredients: Ingredient[];
}
export type idx = number;

export type AddPayload = Recipe[] | Ingredient[] | Recipe | Ingredient;
export type IdxPayload = idx;

export interface IngredientAddMetadata  {
  description: string;
}

export interface RecipeAddMetadata  {
  description: string;
}
