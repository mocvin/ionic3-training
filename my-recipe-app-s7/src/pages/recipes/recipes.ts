import {Component} from '@angular/core';
import {
    IonicPage, Loading,
    LoadingController,
    NavController,
    PopoverController,
    ToastController
} from 'ionic-angular';
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {RecipeActions} from "../../actions/recipe.action";
import {select} from "@angular-redux/store";
import {Recipe} from "../../models/recipe";
import {IngredientActions} from "../../actions/ingredient.action";
import {RecipePage} from "../recipe/recipe";
import {AuthService} from "../../services/auth";
import {RecipesService} from "../../services/recipes";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {DatabaseOptionsPage} from "../database-options/database-options";

@IonicPage()
@Component({
    selector: 'page-recipes',
    templateUrl: 'recipes.html',
})
export class RecipesPage {

    @select() recipes;
    @select() loading$: Observable<boolean>;

    private subscription: Subscription;
    private loading: Loading;

    constructor(public navCtrl: NavController,
                public recipeActions: RecipeActions,
                private recipesService: RecipesService,
                public ingredientActions: IngredientActions,
                private authService: AuthService,
                private loadCtrl: LoadingController,
                private popoverCtrl: PopoverController,
                public toastCtrl: ToastController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad RecipesPage');
    }

    onNewRecipe() {
        this.navCtrl.push(EditRecipePage, {mode: 'New'});
    }

    onClickToBuyIngredients(recipe: Recipe) {
        this.ingredientActions.addIngredients(recipe.ingredients);
        this.presentToast('Ingredients added!')
    }

    onClickToRemove(recipe: Recipe, idx: number) {
        this.recipeActions.removeRecipe(idx);
        this.presentToast('Recipe deleted');
    }

    private presentToast(message = 'Ok',
                         duration = 3000,
                         position = 'bottom',
                         showCloseButton = false,
                         closeButtonText = 'Ok') {
        const toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position,
            showCloseButton,
            closeButtonText
        });

        toast.present();
    }

    onClickViewDescription(recipe: Recipe, index: number) {
        this.navCtrl.push(RecipePage, {'recipe': recipe, index})
    }

    onShowOptions(event: MouseEvent) {
        const popover = this.popoverCtrl.create(DatabaseOptionsPage);
        popover.present({ev: event});
        popover.onDidDismiss(data => {
            if (data.action == 'load') {
                this.recipesService.getRecipes();
            } else {
                this.recipesService.storeList()
                    .then(() => this.presentToast('List stored.'))
            }
        });
    }

    ionViewDidEnter(): void {
        this.subscription = this.loading$.subscribe((val) => {
            if (val) {
                this.loading = this.loadCtrl.create({
                    content: 'Loading...'
                });
                this.loading.present();
            } else {
                if (this.loading) {
                    this.loading.dismiss();
                }
            }
        })
    }

    ionViewDidLeave(): void {
        this.subscription.unsubscribe();
    }

}
