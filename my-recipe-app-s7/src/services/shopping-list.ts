import {Ingredient} from "../models/ingredient";
import {IngredientActions} from "../actions/ingredient.action";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import firebase from 'firebase';
import {AuthService} from "./auth";
import {NgRedux} from "@angular-redux/store";
import {MyRecipeState} from "../models/store";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ShoppingListService {

    constructor(private ingredientActions: IngredientActions,
                private http: HttpClient,
                private ngRedux: NgRedux<MyRecipeState>,
                private authService: AuthService) {
    }

    addItem({ingredientName: name, amount}): Ingredient {
        const ingredient = new Ingredient(name, amount);
        this.ingredientActions.addIngredients([ingredient]);
        return ingredient;
    }

    addItems(items: Ingredient[]) {
        this.ingredientActions.addIngredients(items);
    }

    getItems() {
        const userId = this.authService.getActiveUser().uid;
        let shoppingListRef = firebase.database()
            .ref(`myrecipe/users/${userId}`)
            .child('shopping-list');
        shoppingListRef.once('value')
            .then( (snapshot) => {
                let ingredients: Ingredient[] = snapshot.val() || [];
                this.ingredientActions.loadIngredientsBegin();
                this.ingredientActions.removeAllIngredients();
                this.ingredientActions.addIngredients(ingredients);
                this.ingredientActions.loadIngredientsFinished();
            });
    }

    storeList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        let ingredients = this.ngRedux.getState().ingredients;
        let shoppingListRef = firebase.database()
            .ref(`myrecipe/users/${userId}`)
            .child('shopping-list');
        return shoppingListRef.set(ingredients);
    }

    removeItem(index: number) {
        this.ingredientActions.removeIngredient(index);
    }


}
