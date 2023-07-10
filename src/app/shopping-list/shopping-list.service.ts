import {IngredientsModel} from "../models/ingredients.model";
import {Subject} from "rxjs";

export class ShoppingListService{
  ingredientsChanged = new Subject<IngredientsModel[]>();
  editingItem = new Subject<number>();
  private ingredients : IngredientsModel[] = [
    new IngredientsModel('Apples',5),
    new IngredientsModel('Orange',4),
  ];

  getAll(){
    return this.ingredients.slice();
  }
  getIngredient(index: number){
    return this.ingredients[index];
  }
  addIngredient(newIngredientsModel:IngredientsModel){
    this.ingredients.push(newIngredientsModel);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number,newIngredient:IngredientsModel){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:IngredientsModel[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
