import {FluxStandardAction} from "flux-standard-action";
import {Recipe} from "../models/recipe";
import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";
import {AddPayload, IdxPayload, RecipeAddMetadata} from "../models/store";

export type RecipeLoadAction = FluxStandardAction<null, null>;
export type RecipeAddAction = FluxStandardAction<AddPayload, RecipeAddMetadata>;
export type RecipeRemoveAction = FluxStandardAction<IdxPayload, null>;
export type RecipesRemoveAllAction = FluxStandardAction<null, null>;

@Injectable()
export class RecipeActions {

    static readonly LOAD_RECIPES_BEGIN = 'LOAD_RECIPES_BEGIN';
    static readonly LOAD_RECIPES = 'LOAD_RECIPES';
    static readonly LOAD_RECIPES_FINISHED = 'LOAD_RECIPES_FINISHED';
    static readonly ADD_RECIPES = 'ADD_RECIPES';
    static readonly REMOVE_RECIPE = 'REMOVE_RECIPE';
    static readonly REMOVE_ALL_RECIPES = 'REMOVE_ALL_RECIPES';

    @dispatch()
    loadRecipesBegin = (): RecipeLoadAction => ({
        type: RecipeActions.LOAD_RECIPES_BEGIN,
        meta: null,
        payload: null
    });

    @dispatch()
    loadRecipesFinished = (): RecipeLoadAction => ({
        type: RecipeActions.LOAD_RECIPES_FINISHED,
        meta: null,
        payload: null
    });

    @dispatch()
    loadRecipes = (): RecipeLoadAction => ({
        type: RecipeActions.LOAD_RECIPES,
        meta: null,
        payload: null
    });

    @dispatch()
    addRecipes = (recipes: Recipe[]): RecipeAddAction => ({
        type: RecipeActions.ADD_RECIPES,
        meta: null,
        payload: recipes
    });

    @dispatch()
    removeRecipe = (idx: number): RecipeRemoveAction => ({
        type: RecipeActions.REMOVE_RECIPE,
        meta: null,
        payload: idx
    });

    @dispatch()
    removeAllRecipes = (): RecipesRemoveAllAction => ({
        type: RecipeActions.REMOVE_ALL_RECIPES,
        meta: null,
        payload: null
    });
}
