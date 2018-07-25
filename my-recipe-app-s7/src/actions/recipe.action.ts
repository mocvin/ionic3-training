import {FluxStandardAction} from "flux-standard-action";
import {Recipe} from "../models/recipe";
import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";
import {AddPayload, IdxPayload, RecipeAddMetadata} from "../models/store";

export type RecipeLoadAction = FluxStandardAction<null,null>;
export type RecipeAddAction = FluxStandardAction<AddPayload, RecipeAddMetadata>;
export type RecipeRemoveAction = FluxStandardAction<IdxPayload, null>;

@Injectable()
export class RecipeActions {

  static readonly LOAD_RECIPES = 'LOAD_RECIPES';
  static readonly ADD_RECIPES = 'ADD_RECIPES';
  static readonly REMOVE_RECIPE = 'REMOVE_RECIPE';

  @dispatch()
  loadRecipes = () : RecipeLoadAction => ({
    type: RecipeActions.LOAD_RECIPES,
    meta: null,
    payload: null
  });

  @dispatch()
  addRecipes = (recipes: Recipe[]) : RecipeAddAction => ({
    type: RecipeActions.ADD_RECIPES,
    meta: null,
    payload: recipes
  });

  @dispatch()
  removeRecipe = (idx: number) : RecipeRemoveAction => ({
    type: RecipeActions.REMOVE_RECIPE,
    meta: null,
    payload: idx
  });
}
