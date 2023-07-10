import {Component, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {IngredientsModel} from "../../models/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editMode: boolean = false;
  editItemIndex: number;
  subscription: Subscription;
  editItem:IngredientsModel;
  constructor(private shopService: ShoppingListService) {
  }
  ngOnInit(): void {
    this.subscription = this.shopService.editingItem.subscribe((index: number) => {
      this.editItemIndex = index;
      this.editItem = this.shopService.getIngredient(index);
      this.editMode = true;
      this.slForm.setValue({
        name:this.editItem.name,
        amount:this.editItem.amount
      })
    })
  }
  onSubmit(form: NgForm){
   let ingredient = {
     name: form.value.name,
     amount: form.value.amount
   }
   if(this.editMode){
     this.shopService.updateIngredient(this.editItemIndex,ingredient);
   }
   else{
     this.shopService.addIngredient(ingredient);
   }
   this.editMode = false;
   form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.onClear();
    this.shopService.deleteIngredient(this.editItemIndex);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
