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
import {DevToolsExtension, NgRedux, NgReduxModule} from "@angular-redux/store";
import {RecipeActions} from "../actions/recipe.action";
import {IngredientActions} from "../actions/ingredient.action";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import {INITIAL_STATE, recipeReducer} from "../reducers/recipe.reducer";
import {MyRecipeState} from "../models/store";
import {AuthService} from "../services/auth";
import {SiOptionsPage} from "../pages/shopping-list/si-options/si-options";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {RecipesOptionsPage} from "../pages/recipes/recipes-options/recipes-options";
declare var require;
var reduxLogger = require("redux-logger");

@NgModule({
    declarations: [
        MyApp,
        TabsPage,
        RecipePage,
        RecipesPage,
        ShoppingListPage,
        EditRecipePage,
        SigninPage,
        SignupPage,
        SiOptionsPage,
        RecipesOptionsPage
    ],
    imports: [
        BrowserModule,
        NgReduxModule,
        HttpClientModule,
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
        SignupPage,
        SiOptionsPage,
        RecipesOptionsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ShoppingListService,
        RecipesService,
        RecipeActions,
        AuthService,
        IngredientActions,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DevToolsExtension
    ]
})
export class AppModule {


    constructor(public store: NgRedux<MyRecipeState>, public devTools: DevToolsExtension) {
        store.configureStore(
            recipeReducer,
            INITIAL_STATE,
            [reduxLogger.createLogger()],
            devTools.isEnabled() ? [devTools.enhancer() ]: []
        );
    }
}
