import {FluxStandardAction} from "flux-standard-action";
import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";
import {RecipeRemoveAction} from "./recipe.action";
import {AddPayload, IdxPayload, IngredientAddMetadata} from "../models/store";
import {Ingredient} from "../models/ingredient";

export type IngredientLoadAction = FluxStandardAction<null,null>;
export type IngredientAddAction = FluxStandardAction<AddPayload, IngredientAddMetadata>;
export type IngredientRemoveAction = FluxStandardAction<IdxPayload, null>;
export type IngredientEditAction = FluxStandardAction<AddPayload, null>;


@Injectable()
export class IngredientActions {

  static readonly LOAD_INGREDIENTS = 'LOAD_INGREDIENTS';
  static readonly ADD_INGREDIENTS = 'ADD_INGREDIENTS';
  static readonly REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
  static readonly EDIT_INGREDIENT = 'EDIT_INGREDIENT';

  @dispatch()
  loadIngredients = () : IngredientLoadAction => ({
    type: IngredientActions.LOAD_INGREDIENTS,
    meta: null,
    payload: null
  });

  @dispatch()
  addIngredients = (ingredients: Ingredient[]) : IngredientAddAction => ({
    type: IngredientActions.ADD_INGREDIENTS,
    meta: null,
    payload: ingredients
  });

  @dispatch()
  removeIngredient = (idx: number) : IngredientRemoveAction => ({
    type: IngredientActions.REMOVE_INGREDIENT,
    meta: null,
    payload: idx
  });

  @dispatch()
  editIngredient = (ingredient: Ingredient) : IngredientAddAction => ({
    type: IngredientActions.EDIT_INGREDIENT,
    meta: null,
    payload: ingredient
  });
}
