import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingListPage } from './shopping-list';
import {FormsModule} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list";

@NgModule({
  declarations: [
    ShoppingListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingListPage),
    FormsModule
  ],

  providers: [
    ShoppingListService
  ]
})
export class ShoppingListPageModule {}
