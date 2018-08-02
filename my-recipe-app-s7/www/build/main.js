webpackJsonp([6],{

/***/ 144:
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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiOptionsPage = /** @class */ (function () {
    function SiOptionsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SiOptionsPage.prototype.onAction = function (action) {
        this.viewCtrl.dismiss({ action: action });
    };
    SiOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sl-options',
            template: "\n        <ion-grid text-center>\n            <ion-row>\n                <ion-col>\n                    <h3>Stoore & Load</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('load')\">Load List</button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('store')\">Save List</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], SiOptionsPage);
    return SiOptionsPage;
}());

//# sourceMappingURL=si-options.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_ingredient_action__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_recipe_edit_recipe__ = __webpack_require__(95);
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
            selector: 'page-recipe',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/recipe/recipe.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{recipe?.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col> <h2>{{recipe?.title | uppercase}}</h2></ion-col>\n      <div class="subtitle">{{recipe?.difficulty}}</div>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{recipe?.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor="let ingredient of recipe?.ingredients;">\n            <h2>{{ingredient.name}}</h2>\n            <ion-note item-end>{{ingredient.amount}}</ion-note>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="recipe?.ingredients.length > 0">\n      <ion-col>\n        <button ion-button clear small (click)="onClickToBuyIngredients(recipe)">\n          Add Ingredients to Shopping List\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button outline block (click)="onClickEditRecipe(recipe, idx)">Edit</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button outline block color=\'danger\' (click)="onClickDeleteRecipe()">Delete</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/recipe/recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__actions_ingredient_action__["a" /* IngredientActions */],
            __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__["a" /* RecipeActions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], RecipePage);
    return RecipePage;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_recipe_edit_recipe__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_ingredient_action__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe_recipe__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_list_si_options_si_options__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_recipes__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
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
    function RecipesPage(navCtrl, recipeActions, recipesService, ingredientActions, authService, loadCtrl, popoverCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.recipeActions = recipeActions;
        this.recipesService = recipesService;
        this.ingredientActions = ingredientActions;
        this.authService = authService;
        this.loadCtrl = loadCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
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
    RecipesPage.prototype.onShowOptions = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__shopping_list_si_options_si_options__["a" /* SiOptionsPage */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (data.action == 'load') {
                _this.recipesService.getRecipes();
            }
            else {
                _this.recipesService.storeList()
                    .then(function () { return _this.presentToast('List stored.'); });
            }
        });
    };
    RecipesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.loading$.subscribe(function (val) {
            if (val) {
                _this.loading = _this.loadCtrl.create({
                    content: 'Loading...'
                });
                _this.loading.present();
            }
            else {
                if (_this.loading) {
                    _this.loading.dismiss();
                }
            }
        });
    };
    RecipesPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], RecipesPage.prototype, "recipes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["select"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], RecipesPage.prototype, "loading$", void 0);
    RecipesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recipes',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/recipes/recipes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onNewRecipe()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onShowOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Recipes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid *ngIf="!(recipes | async)?.length" style="height: 100%">\n    <ion-row justify-content-center align-items-center style="height: 100%">\n      <ion-col text-center>\n        <p class="no-recipes">Still no recipe added :) </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let recipe of (recipes | async); index as i">\n    <ion-card-content>\n      <ion-card-title>\n        {{recipe.title}}\n        <p>{{recipe.difficulty}}</p>\n      </ion-card-title>\n      <button outline block ion-button small (click)="onClickViewDescription(recipe, i)"> View Details </button>\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear small (click)="onClickToBuyIngredients(recipe)">Buy Ingredients</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/recipes/recipes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__["a" /* RecipeActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_recipe_action__["a" /* RecipeActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__services_recipes__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_recipes__["a" /* RecipesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__actions_ingredient_action__["a" /* IngredientActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__actions_ingredient_action__["a" /* IngredientActions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_auth__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _j || Object])
    ], RecipesPage);
    return RecipesPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ingredient__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__si_options_si_options__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
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
    function ShoppingListPage(slService, toastCtrl, authService, popoverCtrl, loadCtrl) {
        this.slService = slService;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.popoverCtrl = popoverCtrl;
        this.loadCtrl = loadCtrl;
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
    ShoppingListPage.prototype.onShowOptions = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__si_options_si_options__["a" /* SiOptionsPage */]);
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (data.action == 'load') {
                _this.slService.getItems();
            }
            else {
                _this.slService.storeList()
                    .then(function () { return _this.presentToast('List stored.'); });
            }
        });
    };
    ShoppingListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.loading$.subscribe(function (val) {
            if (val) {
                _this.loading = _this.loadCtrl.create({
                    content: 'Loading...'
                });
                _this.loading.present();
            }
            else {
                if (_this.loading) {
                    _this.loading.dismiss();
                }
            }
        });
    };
    ShoppingListPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], ShoppingListPage.prototype, "ingredients", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["select"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], ShoppingListPage.prototype, "loading$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], ShoppingListPage.prototype, "form", void 0);
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/shopping-list/shopping-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onShowOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Shopping List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onAddItem(f)" >\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Name</ion-label>\n        <ion-input type="text" name="ingredientName" placeholder="Milk" [ngModel]="ingredientToEdit.name" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Amount</ion-label>\n        <ion-input type="number" name="amount" placeholder="2" [ngModel]="ingredientToEdit.amount" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block [disabled]="!f.valid"> Add Item</button>\n  </form>\n\n  <ion-list>\n    <ion-list-header>\n      Ingredients\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let ingredient of ingredients | async; index as i">\n      <ion-item>\n        <h2>{{ingredient.name}}</h2>\n        <ion-note item-end>{{ingredient.amount}}</ion-note>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary" (click)="onClickRemoveIngredient(i)">\n          <ion-icon name="trash"></ion-icon>\n          Remove\n        </button>\n        <button ion-button color="primary" (click)="onClickEditIngredient(i, ingredient)">\n          <ion-icon name="build"></ion-icon>\n          Edit\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/shopping-list/shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shopping_list__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shopping_list__["a" /* ShoppingListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object])
    ], ShoppingListPage);
    return ShoppingListPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        var _a = form.value, email = _a.email, password = _a.password;
        this.authService.signin(email, password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            console.info('firebase error response', error);
            loading.dismiss();
            _this.alertCtrl.create({
                title: "Signin failed",
                message: error.message,
                buttons: ['OK']
            }).present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Signin</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSignin(f)">\n        <ion-list>\n            <ion-item>\n                <ion-label fixed> Mail </ion-label>\n                <ion-input type="email" ngModel name="email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>Password</ion-label>\n                <ion-input type="password" ngModel name="password" required></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="!f.valid">Signin</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        var _a = form.value, email = _a.email, password = _a.password;
        loading.present();
        this.authService.signup(email, password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            console.info('firebase error response', error);
            loading.dismiss();
            _this.alertCtrl.create({
                title: "Signup failed",
                message: error.message,
                buttons: ['OK']
            }).present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignup(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating> Mail </ion-label>\n        <ion-input type="email" ngModel name="email" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" ngModel name="password" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Confirm Password</ion-label>\n        <ion-input type="password" ngmodel name="confirmPassword" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signup</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-recipe/edit-recipe.module": [
		721,
		5
	],
	"../pages/recipe/recipe.module": [
		722,
		4
	],
	"../pages/recipes/recipes.module": [
		723,
		3
	],
	"../pages/shopping-list/shopping-list.module": [
		724,
		2
	],
	"../pages/signin/signin.module": [
		725,
		1
	],
	"../pages/signup/signup.module": [
		726,
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
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.shoppingListPage = __WEBPACK_IMPORTED_MODULE_1__shopping_list_shopping_list__["a" /* ShoppingListPage */];
        this.recipesPage = __WEBPACK_IMPORTED_MODULE_2__recipes_recipes__["a" /* RecipesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',
            template: "\n    <ion-tabs [selectedIndex]=\"1\">\n      <ion-tab [root]=\"shoppingListPage\" tabTitle=\"Shopping List\" tabIcon=\"list-box\"></ion-tab>\n      <ion-tab [root]=\"recipesPage\" tabTitle=\"Recipes\" tabIcon=\"book\"></ion-tab>\n    </ion-tabs>\n  "
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shopping_list__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recipes__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_redux_store__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_recipe_action__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions_ingredient_action__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reducers_recipe_reducer__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_shopping_list_si_options_si_options__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_recipes_recipes_options_recipes_options__ = __webpack_require__(719);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var reduxLogger = __webpack_require__(720);
var AppModule = /** @class */ (function () {
    function AppModule(store, devTools) {
        this.store = store;
        this.devTools = devTools;
        store.configureStore(__WEBPACK_IMPORTED_MODULE_18__reducers_recipe_reducer__["b" /* recipeReducer */], __WEBPACK_IMPORTED_MODULE_18__reducers_recipe_reducer__["a" /* INITIAL_STATE */], [reduxLogger.createLogger()], devTools.isEnabled() ? [devTools.enhancer()] : []);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_recipes_recipes__["a" /* RecipesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shopping_list_si_options_si_options__["a" /* SiOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_recipes_recipes_options_recipes_options__["a" /* RecipesOptionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-recipe/edit-recipe.module#EditRecipePageModule', name: 'EditRecipePage', segment: 'edit-recipe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipe/recipe.module#RecipePageModule', name: 'RecipePage', segment: 'recipe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipes/recipes.module#RecipesPageModule', name: 'RecipesPage', segment: 'recipes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping-list/shopping-list.module#ShoppingListPageModule', name: 'ShoppingListPage', segment: 'shopping-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_recipe_edit_recipe__["a" /* EditRecipePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shopping_list_si_options_si_options__["a" /* SiOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_recipes_recipes_options_recipes_options__["a" /* RecipesOptionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_shopping_list__["a" /* ShoppingListService */],
                __WEBPACK_IMPORTED_MODULE_12__services_recipes__["a" /* RecipesService */],
                __WEBPACK_IMPORTED_MODULE_14__actions_recipe_action__["a" /* RecipeActions */],
                __WEBPACK_IMPORTED_MODULE_19__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__actions_ingredient_action__["a" /* IngredientActions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__angular_redux_store__["DevToolsExtension"]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_13__angular_redux_store__["DevToolsExtension"]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.app().auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        //var provider = new firebase.auth.GoogleAuthProvider();
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        //firebase.auth().signInWithPopup(provider)
        //    .then(result => console.info('Auth Google Result', result))
        //    .catch(error => console.info('error', error));
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getActiveUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(44);
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
        this.loadRecipesBegin = function () { return ({
            type: RecipeActions_1.LOAD_RECIPES_BEGIN,
            meta: null,
            payload: null
        }); };
        this.loadRecipesFinished = function () { return ({
            type: RecipeActions_1.LOAD_RECIPES_FINISHED,
            meta: null,
            payload: null
        }); };
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
        this.removeAllRecipes = function () { return ({
            type: RecipeActions_1.REMOVE_ALL_RECIPES,
            meta: null,
            payload: null
        }); };
    }
    RecipeActions_1 = RecipeActions;
    RecipeActions.LOAD_RECIPES_BEGIN = 'LOAD_RECIPES_BEGIN';
    RecipeActions.LOAD_RECIPES = 'LOAD_RECIPES';
    RecipeActions.LOAD_RECIPES_FINISHED = 'LOAD_RECIPES_FINISHED';
    RecipeActions.ADD_RECIPES = 'ADD_RECIPES';
    RecipeActions.REMOVE_RECIPE = 'REMOVE_RECIPE';
    RecipeActions.REMOVE_ALL_RECIPES = 'REMOVE_ALL_RECIPES';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RecipeActions.prototype, "loadRecipesBegin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RecipeActions.prototype, "loadRecipesFinished", void 0);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], RecipeActions.prototype, "removeAllRecipes", void 0);
    RecipeActions = RecipeActions_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], RecipeActions);
    return RecipeActions;
    var RecipeActions_1;
}());

//# sourceMappingURL=recipe.action.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__(44);
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
        this.loadIngredientsBegin = function () { return ({
            type: IngredientActions_1.LOAD_INGREDIENTS_BEGIN,
            meta: null,
            payload: null
        }); };
        this.loadIngredientsFinished = function () { return ({
            type: IngredientActions_1.LOAD_INGREDIENTS_FINISHED,
            meta: null,
            payload: null
        }); };
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
        this.removeAllIngredients = function () { return ({
            type: IngredientActions_1.REMOVE_ALL_INGREDIENTS,
            meta: null,
            payload: null
        }); };
        this.editIngredient = function (ingredient) { return ({
            type: IngredientActions_1.EDIT_INGREDIENT,
            meta: null,
            payload: ingredient
        }); };
    }
    IngredientActions_1 = IngredientActions;
    IngredientActions.LOAD_INGREDIENTS_BEGIN = 'LOAD_INGREDIENTS_BEGIN';
    IngredientActions.LOAD_INGREDIENTS = 'LOAD_INGREDIENTS';
    IngredientActions.LOAD_INGREDIENTS_FINISHED = 'LOAD_INGREDIENTS_FINISHED';
    IngredientActions.ADD_INGREDIENTS = 'ADD_INGREDIENTS';
    IngredientActions.REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
    IngredientActions.REMOVE_ALL_INGREDIENTS = 'REMOVE_INGREDIENTS';
    IngredientActions.EDIT_INGREDIENT = 'EDIT_INGREDIENT';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], IngredientActions.prototype, "loadIngredientsBegin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
        __metadata("design:type", Object)
    ], IngredientActions.prototype, "loadIngredientsFinished", void 0);
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
    ], IngredientActions.prototype, "removeAllIngredients", void 0);
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

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_shopping_list__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_recipes__ = __webpack_require__(79);
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
    function MyApp(platform, statusBar, splashScreen, authService, slService, recipeService, menuCtrl) {
        var _this = this;
        this.authService = authService;
        this.slService = slService;
        this.recipeService = recipeService;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */];
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyBwq-K9FqQuzouyj7fp1ymJMCyQnREl2Zk",
            authDomain: "ionic3-training.firebaseapp.com",
            databaseURL: "https://ionic3-training.firebaseio.com",
            projectId: "ionic3-training",
            storageBucket: "ionic3-training.appspot.com",
            messagingSenderId: "174354866330"
        });
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().languageCode = 'it';
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            console.info('User', user);
            if (user) {
                _this.isAuthenticated = true;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                _this.slService.getItems();
                _this.recipeService.getRecipes();
            }
            else {
                _this.isAuthenticated = false;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.navCtrl.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */]);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object)
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/app/app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item icon-left (click)="onLoad(rootPage)" *ngIf="authService.getActiveUser()">\n                <ion-icon name="book" item-left></ion-icon>\n                Recipe Book\n            </button>\n            <button ion-item icon-left (click)="onLoad(signinPage)" *ngIf="!authService.getActiveUser()">\n                <ion-icon name="log-in" item-left></ion-icon>\n                Log-in\n            </button>\n            <button ion-item (click)="onLoad(signupPage)" *ngIf="!authService.getActiveUser()">\n                <ion-icon name="person" item-left></ion-icon>\n                Sign up\n            </button>\n            <button ion-item icon-left (click)="onLogout()" *ngIf="authService.getActiveUser()">\n                <ion-icon name="log-out" item-left></ion-icon>\n                Logout\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_auth__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_shopping_list__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_shopping_list__["a" /* ShoppingListService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__services_recipes__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_recipes__["a" /* RecipesService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _h || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = recipeReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__ = __webpack_require__(68);


var INITIAL_STATE = {
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
function recipeReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__["a" /* RecipeActions */].LOAD_RECIPES_BEGIN:
            return Object.assign({}, state, {
                loading: true
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__["a" /* RecipeActions */].LOAD_RECIPES_FINISHED:
            return Object.assign({}, state, {
                loading: false
            });
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_recipe_action__["a" /* RecipeActions */].REMOVE_ALL_RECIPES:
            return Object.assign({}, state, {
                recipes: []
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].LOAD_INGREDIENTS_BEGIN:
            return Object.assign({}, state, {
                loading: true
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].LOAD_INGREDIENTS_FINISHED:
            return Object.assign({}, state, {
                loading: false
            });
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
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].REMOVE_ALL_INGREDIENTS:
            return Object.assign({}, state, {
                ingredients: []
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */].EDIT_INGREDIENT:
            var editAction = action;
    } //switch
    return state;
    var _a, _b;
}
//# sourceMappingURL=recipe.reducer.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesOptionsPage = /** @class */ (function () {
    function RecipesOptionsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    RecipesOptionsPage.prototype.onAction = function (action) {
        this.viewCtrl.dismiss({ action: action });
    };
    RecipesOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recipes-options',
            template: "\n        <ion-grid text-center>\n            <ion-row>\n                <ion-col>\n                    <h3>Store & Load</h3>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('load')\">Load List</button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button outline (click)=\"onAction('store')\">Save List</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], RecipesOptionsPage);
    return RecipesOptionsPage;
}());

//# sourceMappingURL=recipes-options.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_recipe__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_recipe_action__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__);
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
    function RecipesService(recipeActions, authService, ngRedux) {
        this.recipeActions = recipeActions;
        this.authService = authService;
        this.ngRedux = ngRedux;
    }
    RecipesService.prototype.addRecipe = function (_a) {
        var title = _a.title, description = _a.description, difficulty = _a.difficulty, ingredients = _a.ingredients;
        this.recipeActions.addRecipes([new __WEBPACK_IMPORTED_MODULE_0__models_recipe__["a" /* Recipe */](title, description, difficulty, ingredients)]);
    };
    RecipesService.prototype.removeRecipe = function (index) {
        this.recipeActions.removeRecipe(index);
    };
    RecipesService.prototype.getRecipes = function () {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        var shoppingListRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database()
            .ref("myrecipe/users/" + userId)
            .child('recipes');
        shoppingListRef.once('value')
            .then(function (snapshot) {
            var recipes = snapshot.val() || [];
            _this.recipeActions.loadRecipesBegin();
            _this.recipeActions.removeAllRecipes();
            _this.recipeActions.addRecipes(recipes);
            _this.recipeActions.loadRecipesFinished();
        });
    };
    RecipesService.prototype.storeList = function () {
        var userId = this.authService.getActiveUser().uid;
        var recipes = this.ngRedux.getState().recipes;
        var recipesRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database()
            .ref("myrecipe/users/" + userId)
            .child('recipes');
        return recipesRef.set(recipes);
    };
    RecipesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__actions_recipe_action__["a" /* RecipeActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__actions_recipe_action__["a" /* RecipeActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
    ], RecipesService);
    return RecipesService;
    var _a, _b, _c;
}());

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_recipes__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ingredient__ = __webpack_require__(144);
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
            selector: 'page-edit-recipe',template:/*ion-inline-start:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/edit-recipe/edit-recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ mode }} Recipe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating> Title </ion-label>\n        <ion-input type="text" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let option of selectOptions" [value]="option">{{option}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="button" clear block (click)="onManageIngredients()">Manage Ingredents</button>\n    <ion-list formArrayName="ingredients">\n      <ion-item *ngFor="let igControl of recipeForm.get(\'ingredients\').controls; let i = index">\n        <ion-label>Name</ion-label>\n        <ion-input type="text" [formControlName]="i" floating></ion-input>\n      </ion-item>\n    </ion-list>\n    <button type="submit" ion-button block>{{mode}} Recipe</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/vinmoc/PROJECTS/my-github/ionic3-training/my-recipe-app-s7/src/pages/edit-recipe/edit-recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_recipes__["a" /* RecipesService */]])
    ], EditRecipePage);
    return EditRecipePage;
}());

//# sourceMappingURL=edit-recipe.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_ingredient__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_redux_store__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);
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
    function ShoppingListService(ingredientActions, http, ngRedux, authService) {
        this.ingredientActions = ingredientActions;
        this.http = http;
        this.ngRedux = ngRedux;
        this.authService = authService;
    }
    ShoppingListService.prototype.addItem = function (_a) {
        var name = _a.ingredientName, amount = _a.amount;
        var ingredient = new __WEBPACK_IMPORTED_MODULE_0__models_ingredient__["a" /* Ingredient */](name, amount);
        this.ingredientActions.addIngredients([ingredient]);
        return ingredient;
    };
    ShoppingListService.prototype.addItems = function (items) {
        this.ingredientActions.addIngredients(items);
    };
    ShoppingListService.prototype.getItems = function () {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        var shoppingListRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database()
            .ref("myrecipe/users/" + userId)
            .child('shopping-list');
        shoppingListRef.once('value')
            .then(function (snapshot) {
            var ingredients = snapshot.val() || [];
            _this.ingredientActions.loadIngredientsBegin();
            _this.ingredientActions.removeAllIngredients();
            _this.ingredientActions.addIngredients(ingredients);
            _this.ingredientActions.loadIngredientsFinished();
        });
    };
    ShoppingListService.prototype.storeList = function () {
        var userId = this.authService.getActiveUser().uid;
        var ingredients = this.ngRedux.getState().ingredients;
        var shoppingListRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database()
            .ref("myrecipe/users/" + userId)
            .child('shopping-list');
        return shoppingListRef.set(ingredients);
    };
    ShoppingListService.prototype.removeItem = function (index) {
        this.ingredientActions.removeIngredient(index);
    };
    ShoppingListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__actions_ingredient_action__["a" /* IngredientActions */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_5__auth__["a" /* AuthService */]])
    ], ShoppingListService);
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map