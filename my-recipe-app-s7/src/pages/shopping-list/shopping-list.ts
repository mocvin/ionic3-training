import {Component, ViewChild} from '@angular/core';
import {IonicPage, Loading, LoadingController, PopoverController, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list";
import {Ingredient} from "../../models/ingredient";
import {select} from "@angular-redux/store";
import {AuthService} from "../../services/auth";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {DatabaseOptionsPage} from "../database-options/database-options";

@IonicPage()
@Component({
    selector: 'page-shopping-list',
    templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

    @select() ingredients;
    @select() loading$: Observable<boolean>;

    ingredientToEdit: Ingredient = new Ingredient();
    idxIngredientToEdit: number = -1;

    editMode = false;
    @ViewChild('f') form;
    private subscription: Subscription;
    private loading: Loading;

    constructor(private slService: ShoppingListService,
                private toastCtrl: ToastController,
                private authService: AuthService,
                private popoverCtrl: PopoverController,
                private loadCtrl: LoadingController) {
    }

    onAddItem(form: NgForm) {
        console.info('Form Value', form.value);
        if (this.editMode) {
            this.slService.removeItem(this.idxIngredientToEdit);
            this.editMode = false;
        }
        this.slService.addItem(form.value);
        this.presentToast('Added ingredient', 2000, 'middle');
        form.reset();
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

    onClickRemoveIngredient(index: number) {
        console.info('Delete', index);
        this.slService.removeItem(index);
    }

    onClickEditIngredient(index: number, ingredient: Ingredient) {
        Object.assign(this.ingredientToEdit, ingredient);
        this.idxIngredientToEdit = index;
        this.editMode = true;
    }

    onShowOptions(event: MouseEvent) {
        const popover = this.popoverCtrl.create(DatabaseOptionsPage);
        popover.present({ev: event});

        popover.onDidDismiss(data => {
            if (data.action == 'load') {
                this.slService.getItems();
            } else {
                this.slService.storeList()
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
