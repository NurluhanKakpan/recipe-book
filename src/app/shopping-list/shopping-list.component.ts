import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientsModel} from "../models/ingredients.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients : IngredientsModel[];
  isSubscribe: Subscription;
  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getAll();
    this.isSubscribe = this.shoppingListService.ingredientsChanged.subscribe(ingredients =>this.ingredients = ingredients);
  }

  onEdit(index: number): void {
    this.shoppingListService.editingItem.next(index);
  }

  ngOnDestroy(): void {
    this.isSubscribe.unsubscribe();
  }

}
