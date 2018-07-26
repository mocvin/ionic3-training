import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {RecipePage} from "../pages/recipe/recipe";
import {RecipesPage} from "../pages/recipes/recipes";
import {ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {EditRecipePage} from "../pages/edit-recipe/edit-recipe";
import {ShoppingListService} from "../services/shopping-list";
import {RecipesService} from "../services/recipes";
import {DevToolsExtension, NgReduxModule} from "@angular-redux/store";
import {RecipeActions} from "../actions/recipe.action";
import {IngredientActions} from "../actions/ingredient.action";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        RecipePage,
        RecipesPage,
        ShoppingListPage,
        EditRecipePage,
        SigninPage,
        SignupPage
    ],
    imports: [
        BrowserModule,
        NgReduxModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage,
        RecipePage,
        RecipesPage,
        ShoppingListPage,
        EditRecipePage,
        SigninPage,
        SignupPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ShoppingListService,
        RecipesService,
        RecipeActions,
        IngredientActions,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DevToolsExtension
    ]
})
export class AppModule {
}
