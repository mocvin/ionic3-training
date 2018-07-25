import {Ingredient} from "../models/ingredient";
import {IngredientActions} from "../actions/ingredient.action";
import {Injectable} from "@angular/core";

@Injectable()
export class ShoppingListService {
  private ingredients: Array<Ingredient> = [];

  constructor(private ingredientActions: IngredientActions) {}

  addItem({ingredientName: name, amount}): Ingredient {
    const ingredient = new Ingredient(name, amount);
    this.ingredientActions.addIngredients([ingredient]);
    //this.ingredients.push(ingredient);
    return ingredient;
  }

  addItems(items: Ingredient[]) {
    //this.ingredients.push(...items);
    this.ingredientActions.addIngredients(items);
  }

  getItems() {
    return this.ingredients.slice();
  }

  removeItem(index: number) {
    this.ingredientActions.removeIngredient(index);
  }


}
