import {FluxStandardAction} from "flux-standard-action";
import {Injectable} from "@angular/core";
import {dispatch} from "@angular-redux/store";
import {AddPayload, IdxPayload, IngredientAddMetadata} from "../models/store";
import {Ingredient} from "../models/ingredient";

export type IngredientLoadAction = FluxStandardAction<null, null>;
export type IngredientAddAction = FluxStandardAction<AddPayload, IngredientAddMetadata>;
export type IngredientRemoveAction = FluxStandardAction<IdxPayload, null>;
export type IngredientRemoveAllAction = FluxStandardAction<null, null>;
export type IngredientEditAction = FluxStandardAction<AddPayload, null>;


@Injectable()
export class IngredientActions {

    static readonly LOAD_INGREDIENTS_BEGIN = 'LOAD_INGREDIENTS_BEGIN';
    static readonly LOAD_INGREDIENTS = 'LOAD_INGREDIENTS';
    static readonly LOAD_INGREDIENTS_FINISHED = 'LOAD_INGREDIENTS_FINISHED';
    static readonly ADD_INGREDIENTS = 'ADD_INGREDIENTS';
    static readonly REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
    static readonly REMOVE_ALL_INGREDIENTS = 'REMOVE_INGREDIENTS';
    static readonly EDIT_INGREDIENT = 'EDIT_INGREDIENT';

    @dispatch()
    loadIngredientsBegin = (): IngredientLoadAction => ({
        type: IngredientActions.LOAD_INGREDIENTS_BEGIN,
        meta: null,
        payload: null
    });

    @dispatch()
    loadIngredientsFinished = (): IngredientLoadAction => ({
        type: IngredientActions.LOAD_INGREDIENTS_FINISHED,
        meta: null,
        payload: null
    });

    @dispatch()
    loadIngredients = (): IngredientLoadAction => ({
        type: IngredientActions.LOAD_INGREDIENTS,
        meta: null,
        payload: null
    });

    @dispatch()
    addIngredients = (ingredients: Ingredient[]): IngredientAddAction => ({
        type: IngredientActions.ADD_INGREDIENTS,
        meta: null,
        payload: ingredients
    });

    @dispatch()
    removeIngredient = (idx: number): IngredientRemoveAction => ({
        type: IngredientActions.REMOVE_INGREDIENT,
        meta: null,
        payload: idx
    });

    @dispatch()
    removeAllIngredients = (): IngredientRemoveAllAction => ({
        type: IngredientActions.REMOVE_ALL_INGREDIENTS,
        meta: null,
        payload: null
    });

    @dispatch()
    editIngredient = (ingredient: Ingredient): IngredientAddAction => ({
        type: IngredientActions.EDIT_INGREDIENT,
        meta: null,
        payload: ingredient
    });
}
