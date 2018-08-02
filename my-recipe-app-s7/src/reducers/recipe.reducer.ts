import {Action} from "redux";
import {RecipeActions, RecipeAddAction, RecipeRemoveAction} from "../actions/recipe.action";
import {MyRecipeState} from "../models/store";
import {
    IngredientActions,
    IngredientAddAction,
    IngredientEditAction,
    IngredientRemoveAction
} from "../actions/ingredient.action";
import {Recipe} from "../models/recipe";
import {Ingredient} from "../models/ingredient";

export const INITIAL_STATE: MyRecipeState = {
    recipes: [],
    ingredients: [],
    loading: false
};

/**
 * Redux reducer
 *
 * @param {MyRecipeState} state
 * @param {Action} action
 * @returns {MyRecipeState}
 */
export function recipeReducer(state: MyRecipeState = INITIAL_STATE, action: Action): MyRecipeState {

    switch (action.type) {
        case RecipeActions.LOAD_RECIPES_BEGIN:
            return Object.assign({}, state, {
                loading: true
            });
        case RecipeActions.LOAD_RECIPES_FINISHED:
            return Object.assign({}, state, {
                loading: false
            });
        case RecipeActions.LOAD_RECIPES:
            return state;
        case RecipeActions.ADD_RECIPES:
            const recipeAddAction = action as RecipeAddAction;
            return Object.assign({}, state, {
                recipes: state.recipes.concat(...(<Array<Recipe>>recipeAddAction.payload).slice(0))
            });
        case RecipeActions.REMOVE_RECIPE: {
            const removeAct = action as RecipeRemoveAction;
            const copy = state.recipes.slice();
            copy.splice(removeAct.payload, 1);
            return Object.assign({}, state, {
                recipes: copy
            });
        }
        case RecipeActions.REMOVE_ALL_RECIPES:
            return Object.assign({}, state, {
                recipes: []
            });
        case IngredientActions.LOAD_INGREDIENTS_BEGIN:
            return Object.assign({}, state, {
                loading: true
            });

        case IngredientActions.LOAD_INGREDIENTS_FINISHED:
            return Object.assign({}, state, {
                loading: false
            });
        case IngredientActions.LOAD_INGREDIENTS:
            return state;
        case IngredientActions.ADD_INGREDIENTS: {
            const ingredientAddAction = action as IngredientAddAction;
            return Object.assign({}, state, {
                ingredients: state.ingredients.concat(...(<Ingredient[]>ingredientAddAction.payload).slice(0))
            });
        }
        case IngredientActions.REMOVE_INGREDIENT:
            const removeAction = action as IngredientRemoveAction;
            const copy = state.ingredients.slice();
            copy.splice(removeAction.payload, 1);
            return Object.assign({}, state, {
                ingredients: copy
            });
        case IngredientActions.REMOVE_ALL_INGREDIENTS:
            return Object.assign({}, state, {
                ingredients: []
            });
        case IngredientActions.EDIT_INGREDIENT:
            const editAction = action as IngredientEditAction;
    } //switch

    return state;
}
