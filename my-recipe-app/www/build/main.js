webpackJsonp([4],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_ingredient_action__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_recipe_edit_recipe__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecipePage = /** @class */ (function () {
    function RecipePage(navCtrl, navParams, ingredientActions, recipeActions, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ingredientActions = ingredientActions;
        this.recipeActions = recipeActions;
        this.toastCtrl = toastCtrl;
    }
    RecipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipePage');
    };
    RecipePage.prototype.ionViewWillEnter = function () {
        this.recipe = this.navParams.get('recipe');
        this.index = this.navParams.get('index');
    };
    RecipePage.prototype.onClickToBuyIngredients = function (recipe) {
        this.ingredientActions.addIngredients(recipe.ingredients);
        this.presentToast('Ingredients added to the shopping list!');
    };
    RecipePage.prototype.presentToast = function (message, duration, position, showCloseButton, closeButtonText) {
        if (message === void 0) { message = 'Ok'; }
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'bottom'; }
        if (showCloseButton === void 0) { showCloseButton = false; }
        if (closeButtonText === void 0) { closeButtonText = 'Ok'; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText
        });
        toast.present();
    };
    RecipePage.prototype.onClickEditRecipe = function (recipe, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'Edit', recipe: recipe, index: idx });
    };
    RecipePage.prototype.onClickDeleteRecipe = function () {
        this.recipeActions.removeRecipe(this.index);
        this.presentToast('Recipe deleted!');
        this.navCtrl.popToRoot();
    };
    RecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recipe',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/recipe/recipe.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{recipe?.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col> <h2>{{recipe?.title | uppercase}}</h2></ion-col>\n      <div class="subtitle">{{recipe?.difficulty}}</div>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{recipe?.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor="let ingredient of recipe?.ingredients;">\n            <h2>{{ingredient.name}}</h2>\n            <ion-note item-end>{{ingredient.amount}}</ion-note>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="recipe?.ingredients.length > 0">\n      <ion-col>\n        <button ion-button clear small (click)="onClickToBuyIngredients(recipe)">\n          Add Ingredients to Shopping List\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button outline block (click)="onClickEditRecipe(recipe, idx)">Edit</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button outline block color=\'danger\' (click)="onClickDeleteRecipe()">Delete</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/recipe/recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__actions_ingredient_action__["a" /* IngredientActions */],
            __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__["a" /* RecipeActions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RecipePage);
    return RecipePage;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_ingredient_action__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe_recipe__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipesPage = /** @class */ (function () {
    function RecipesPage(navCtrl, recipeActions, ingredientActions, toastCtrl) {
        this.navCtrl = navCtrl;
        this.recipeActions = recipeActions;
        this.ingredientActions = ingredientActions;
        this.toastCtrl = toastCtrl;
        recipeActions.loadRecipes();
    }
    RecipesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipesPage');
    };
    RecipesPage.prototype.onNewRecipe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__["a" /* EditRecipePage */], { mode: 'New' });
    };
    RecipesPage.prototype.onClickToBuyIngredients = function (recipe) {
        this.ingredientActions.addIngredients(recipe.ingredients);
        this.presentToast('Ingredients added!');
    };
    RecipesPage.prototype.onClickToRemove = function (recipe, idx) {
        this.recipeActions.removeRecipe(idx);
        this.presentToast('Recipe deleted');
    };
    RecipesPage.prototype.presentToast = function (message, duration, position, showCloseButton, closeButtonText) {
        if (message === void 0) { message = 'Ok'; }
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'bottom'; }
        if (showCloseButton === void 0) { showCloseButton = false; }
        if (closeButtonText === void 0) { closeButtonText = 'Ok'; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText
        });
        toast.present();
    };
    RecipesPage.prototype.onClickViewDescription = function (recipe, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recipe_recipe__["a" /* RecipePage */], { 'recipe': recipe, index: index });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], RecipesPage.prototype, "recipes", void 0);
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recipes',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/recipes/recipes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onNewRecipe()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Recipes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid *ngIf="!(recipes | async)?.length" style="height: 100%">\n    <ion-row justify-content-center align-items-center style="height: 100%">\n      <ion-col text-center>\n        <p class="no-recipes">Still no recipe added :) </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let recipe of (recipes | async); index as i">\n    <ion-card-content>\n      <ion-card-title>\n        {{recipe.title}}\n        <p>{{recipe.difficulty}}</p>\n      </ion-card-title>\n      <button outline block ion-button small (click)="onClickViewDescription(recipe, i)"> View Details </button>\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear small (click)="onClickToBuyIngredients(recipe)">Buy Ingredients</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/recipes/recipes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__["a" /* RecipeActions */],
            __WEBPACK_IMPORTED_MODULE_5__actions_ingredient_action__["a" /* IngredientActions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RecipesPage);
    return RecipesPage;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ingredient__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingListPage = /** @class */ (function () {
    function ShoppingListPage(slService, toastCtrl) {
        this.slService = slService;
        this.toastCtrl = toastCtrl;
        this.ingredientToEdit = new __WEBPACK_IMPORTED_MODULE_3__models_ingredient__["a" /* Ingredient */]();
        this.idxIngredientToEdit = -1;
        this.editMode = false;
    }
    ShoppingListPage.prototype.onAddItem = function (form) {
        console.info('Form Value', form.value);
        if (this.editMode) {
            this.slService.removeItem(this.idxIngredientToEdit);
            this.editMode = false;
        }
        this.slService.addItem(form.value);
        this.presentToast('Added ingredient', 2000, 'middle');
        form.reset();
    };
    ShoppingListPage.prototype.ionViewWillEnter = function () {
        //this.ingredients = this.slService.getItems();
    };
    ShoppingListPage.prototype.presentToast = function (message, duration, position, showCloseButton, closeButtonText) {
        if (message === void 0) { message = 'Ok'; }
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'bottom'; }
        if (showCloseButton === void 0) { showCloseButton = false; }
        if (closeButtonText === void 0) { closeButtonText = 'Ok'; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText
        });
        toast.present();
    };
    ShoppingListPage.prototype.onClickRemoveIngredient = function (index) {
        console.info('Delete', index);
        this.slService.removeItem(index);
    };
    ShoppingListPage.prototype.onClickEditIngredient = function (index, ingredient) {
        Object.assign(this.ingredientToEdit, ingredient);
        this.idxIngredientToEdit = index;
        this.editMode = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], ShoppingListPage.prototype, "ingredients", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], ShoppingListPage.prototype, "form", void 0);
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/shopping-list/shopping-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Shopping List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onAddItem(f)" >\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Name</ion-label>\n        <ion-input type="text" name="ingredientName" placeholder="Milk" [ngModel]="ingredientToEdit.name" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Amount</ion-label>\n        <ion-input type="number" name="amount" placeholder="2" [ngModel]="ingredientToEdit.amount" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block [disabled]="!f.valid"> Add Item</button>\n  </form>\n\n  <ion-list>\n    <ion-list-header>\n      Ingredients\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let ingredient of ingredients | async; index as i">\n      <ion-item>\n        <h2>{{ingredient.name}}</h2>\n        <ion-note item-end>{{ingredient.amount}}</ion-note>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary" (click)="onClickRemoveIngredient(i)">\n          <ion-icon name="trash"></ion-icon>\n          Remove\n        </button>\n        <button ion-button color="primary" (click)="onClickEditIngredient(i, ingredient)">\n          <ion-icon name="build"></ion-icon>\n          Edit\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/shopping-list/shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shopping_list__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ShoppingListPage);
    return ShoppingListPage;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ingredient__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListService = /** @class */ (function () {
    function ShoppingListService(ingredientActions) {
        this.ingredientActions = ingredientActions;
        this.ingredients = [];
    }
    ShoppingListService.prototype.addItem = function (_a) {
        var name = _a.ingredientName, amount = _a.amount;
        var ingredient = new __WEBPACK_IMPORTED_MODULE_0__models_ingredient__["a" /* Ingredient */](name, amount);
        this.ingredientActions.addIngredients([ingredient]);
        //this.ingredients.push(ingredient);
        return ingredient;
    };
    ShoppingListService.prototype.addItems = function (items) {
        //this.ingredients.push(...items);
        this.ingredientActions.addIngredients(items);
    };
    ShoppingListService.prototype.getItems = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.removeItem = function (index) {
        this.ingredientActions.removeIngredient(index);
    };
    ShoppingListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */]])
    ], ShoppingListService);
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-recipe/edit-recipe.module": [
		702,
		3
	],
	"../pages/recipe/recipe.module": [
		703,
		2
	],
	"../pages/recipes/recipes.module": [
		704,
		1
	],
	"../pages/shopping-list/shopping-list.module": [
		705,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_recipe__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_recipe_action__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipesService = /** @class */ (function () {
    function RecipesService(recipeActions) {
        this.recipeActions = recipeActions;
    }
    RecipesService.prototype.addRecipe = function (_a) {
        var title = _a.title, description = _a.description, difficulty = _a.difficulty, ingredients = _a.ingredients;
        this.recipeActions.addRecipes([new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients)]);
    };
    RecipesService.prototype.removeRecipe = function (index) {
        this.recipeActions.removeRecipe(index);
    };
    RecipesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__actions_recipe_action__["a" /* RecipeActions */]])
    ], RecipesService);
    return RecipesService;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_recipe_reducer__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var reduxLogger = __webpack_require__(701);
var TabsPage = /** @class */ (function () {
    function TabsPage(store, devTools) {
        this.store = store;
        this.devTools = devTools;
        this.shoppingListPage = __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__["a" /* ShoppingListPage */];
        this.recipesPage = __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__["a" /* RecipesPage */];
        store.configureStore(__WEBPACK_IMPORTED_MODULE_4__reducers_recipe_reducer__["b" /* recipeReducer */], __WEBPACK_IMPORTED_MODULE_4__reducers_recipe_reducer__["a" /* INITIAL_STATE */], [reduxLogger.createLogger()], devTools.isEnabled() ? [devTools.enhancer()] : []);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',
            template: "\n    <ion-tabs [selectedIndex]=\"1\">\n      <ion-tab [root]=\"shoppingListPage\" tabTitle=\"Shopping List\" tabIcon=\"list-box\"></ion-tab>\n      <ion-tab [root]=\"recipesPage\" tabTitle=\"Recipes\" tabIcon=\"book\"></ion-tab>\n    </ion-tabs>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["DevToolsExtension"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shopping_list__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recipes__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_redux_store__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_recipe_action__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions_ingredient_action__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-recipe/edit-recipe.module#EditRecipePageModule', name: 'EditRecipePage', segment: 'edit-recipe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipe/recipe.module#RecipePageModule', name: 'RecipePage', segment: 'recipe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipes/recipes.module#RecipesPageModule', name: 'RecipesPage', segment: 'recipes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping-list/shopping-list.module#ShoppingListPageModule', name: 'ShoppingListPage', segment: 'shopping-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_shopping_list__["a" /* ShoppingListService */],
                __WEBPACK_IMPORTED_MODULE_12__services_recipes__["a" /* RecipesService */],
                __WEBPACK_IMPORTED_MODULE_14__actions_recipe_action__["a" /* RecipeActions */],
                __WEBPACK_IMPORTED_MODULE_15__actions_ingredient_action__["a" /* IngredientActions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__angular_redux_store__["DevToolsExtension"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(title, description, difficulty, ingredients) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeActions = /** @class */ (function () {
    function RecipeActions() {
        this.loadRecipes = function () { return ({
            type: RecipeActions_1.LOAD_RECIPES,
            meta: null,
            payload: null
        }); };
        this.addRecipes = function (recipes) { return ({
            type: RecipeActions_1.ADD_RECIPES,
            meta: null,
            payload: recipes
        }); };
        this.removeRecipe = function (idx) { return ({
            type: RecipeActions_1.REMOVE_RECIPE,
            meta: null,
            payload: idx
        }); };
    }
    RecipeActions_1 = RecipeActions;
    RecipeActions.LOAD_RECIPES = 'LOAD_RECIPES';
    RecipeActions.ADD_RECIPES = 'ADD_RECIPES';
    RecipeActions.REMOVE_RECIPE = 'REMOVE_RECIPE';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RecipeActions.prototype, "loadRecipes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RecipeActions.prototype, "addRecipes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RecipeActions.prototype, "removeRecipe", void 0);
    RecipeActions = RecipeActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], RecipeActions);
    return RecipeActions;
    var RecipeActions_1;
}());

//# sourceMappingURL=recipe.action.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngredientActions = /** @class */ (function () {
    function IngredientActions() {
        this.loadIngredients = function () { return ({
            type: IngredientActions_1.LOAD_INGREDIENTS,
            meta: null,
            payload: null
        }); };
        this.addIngredients = function (ingredients) { return ({
            type: IngredientActions_1.ADD_INGREDIENTS,
            meta: null,
            payload: ingredients
        }); };
        this.removeIngredient = function (idx) { return ({
            type: IngredientActions_1.REMOVE_INGREDIENT,
            meta: null,
            payload: idx
        }); };
        this.editIngredient = function (ingredient) { return ({
            type: IngredientActions_1.EDIT_INGREDIENT,
            meta: null,
            payload: ingredient
        }); };
    }
    IngredientActions_1 = IngredientActions;
    IngredientActions.LOAD_INGREDIENTS = 'LOAD_INGREDIENTS';
    IngredientActions.ADD_INGREDIENTS = 'ADD_INGREDIENTS';
    IngredientActions.REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
    IngredientActions.EDIT_INGREDIENT = 'EDIT_INGREDIENT';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], IngredientActions.prototype, "loadIngredients", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], IngredientActions.prototype, "addIngredients", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], IngredientActions.prototype, "removeIngredient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], IngredientActions.prototype, "editIngredient", void 0);
    IngredientActions = IngredientActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IngredientActions);
    return IngredientActions;
    var IngredientActions_1;
}());

//# sourceMappingURL=ingredient.action.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/app/app.html"*/'<ion-nav [root]="tabsPage" #nav></ion-nav>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = recipeReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__ = __webpack_require__(65);


var INITIAL_STATE = {
    recipes: [],
    ingredients: []
};
/**
 * Redux reducer
 *
 * @param {MyRecipeState} state
 * @param {Action} action
 * @returns {MyRecipeState}
 */
function recipeReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__["a" /* RecipeActions */].LOAD_RECIPES:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__["a" /* RecipeActions */].ADD_RECIPES:
            var recipeAddAction = action;
            return Object.assign({}, state, {
                recipes: (_a = state.recipes).concat.apply(_a, recipeAddAction.payload.slice(0))
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__["a" /* RecipeActions */].REMOVE_RECIPE: {
            var removeAct = action;
            var copy_1 = state.recipes.slice();
            copy_1.splice(removeAct.payload, 1);
            return Object.assign({}, state, {
                recipes: copy_1
            });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].LOAD_INGREDIENTS:
            return state;
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].ADD_INGREDIENTS: {
            var ingredientAddAction = action;
            return Object.assign({}, state, {
                ingredients: (_b = state.ingredients).concat.apply(_b, ingredientAddAction.payload.slice(0))
            });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].REMOVE_INGREDIENT:
            var removeAction = action;
            var copy = state.ingredients.slice();
            copy.splice(removeAction.payload, 1);
            return Object.assign({}, state, {
                ingredients: copy
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].EDIT_INGREDIENT:
            var editAction = action;
    } //switch
    return state;
    var _a, _b;
}
//# sourceMappingURL=recipe.reducer.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ingredient__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditRecipePage = /** @class */ (function () {
    function EditRecipePage(navParams, navCtrl, actionSheetCtrl, alertCtrl, toastCtrl, recipesService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.recipesService = recipesService;
        this.mode = 'New';
        this.selectOptions = ['Easy', 'Medium', 'Hard'];
    }
    EditRecipePage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode === 'Edit') {
            console.log('Initializing form for editing.');
            this.recipe = this.navParams.get('recipe');
            this.index = this.navParams.get('index');
        }
        this.initializeForm();
    };
    EditRecipePage.prototype.onSubmit = function () {
        console.info('RecipeForm', this.recipeForm);
        var value = this.recipeForm.value;
        var ingredients = [];
        if (value.ingredients.length > 0) {
            ingredients = value.ingredients.map(function (name) { return new __WEBPACK_IMPORTED_MODULE_4__models_ingredient__["a" /* Ingredient */](name, 1); });
        }
        if (this.mode === 'Edit') {
            this.recipesService.removeRecipe(this.index);
        }
        this.recipesService.addRecipe({
            title: value.title,
            description: value.description,
            difficulty: value.difficulty,
            ingredients: ingredients
        });
        this.recipeForm.reset();
        this.navCtrl.popToRoot();
    };
    EditRecipePage.prototype.initializeForm = function () {
        var title = null;
        var description = null;
        var difficulty = 'Medium';
        var ingredients = [];
        if (this.mode == 'Edit') {
            title = this.recipe.title;
            description = this.recipe.description;
            difficulty = this.recipe.difficulty;
            ingredients = this.recipe.ingredients.map(function (ingredient) { return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](ingredient.name); });
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'difficulty': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'ingredients': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](ingredients)
        });
    };
    EditRecipePage.prototype.onManageIngredients = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Add Ingredient',
                    handler: function () {
                        _this.createNewIngredientAlert().present();
                    }
                },
                {
                    text: 'Remove all Ingredients',
                    role: 'destructive',
                    handler: function () {
                        var ingredientControls = _this.recipeForm.get('ingredients').controls;
                        if (ingredientControls.length > 0) {
                            ingredientControls.length = 0;
                            _this.presentToast('All ingredients were removed.', 2000, 'bottom');
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    EditRecipePage.prototype.createNewIngredientAlert = function () {
        var _this = this;
        return this.alertCtrl.create({
            title: 'Add Ingredient',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        if (data.name.trim() == '' || data.name == null) {
                            _this.presentToast('Insert a valid name!', 3000, 'middle');
                        }
                        else {
                            _this.recipeForm.get('ingredients').push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data.name));
                            _this.presentToast('Ingredient added', 2000);
                        }
                    }
                }
            ]
        });
    };
    EditRecipePage.prototype.presentToast = function (message, duration, position, showCloseButton, closeButtonText) {
        if (message === void 0) { message = 'Ok'; }
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = 'bottom'; }
        if (showCloseButton === void 0) { showCloseButton = false; }
        if (closeButtonText === void 0) { closeButtonText = 'Ok'; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText
        });
        toast.present();
    };
    EditRecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-recipe',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/edit-recipe/edit-recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ mode }} Recipe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating> Title </ion-label>\n        <ion-input type="text" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let option of selectOptions" [value]="option">{{option}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="button" clear block (click)="onManageIngredients()">Manage Ingredents</button>\n    <ion-list formArrayName="ingredients">\n      <ion-item *ngFor="let igControl of recipeForm.get(\'ingredients\').controls; let i = index">\n        <ion-label>Name</ion-label>\n        <ion-input type="text" [formControlName]="i" floating></ion-input>\n      </ion-item>\n    </ion-list>\n    <button type="submit" ion-button block>{{mode}} Recipe</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app/src/pages/edit-recipe/edit-recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */]])
    ], EditRecipePage);
    return EditRecipePage;
}());

//# sourceMappingURL=edit-recipe.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map