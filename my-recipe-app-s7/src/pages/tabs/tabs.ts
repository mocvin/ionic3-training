import {Component} from "@angular/core";
import {ShoppingListPage} from "../shopping-list/shopping-list";
import {RecipesPage} from "../recipes/recipes";
import {DevToolsExtension, NgRedux} from "@angular-redux/store";
import {INITIAL_STATE, recipeReducer} from "../../reducers/recipe.reducer";
import {MyRecipeState} from "../../models/store";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs [selectedIndex]="1">
      <ion-tab [root]="shoppingListPage" tabTitle="Shopping List" tabIcon="list-box"></ion-tab>
      <ion-tab [root]="recipesPage" tabTitle="Recipes" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  shoppingListPage: any = ShoppingListPage;
  recipesPage: any = RecipesPage;
}
