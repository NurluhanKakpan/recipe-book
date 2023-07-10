import {RecipeModel} from "../models/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {IngredientsModel} from "../models/ingredients.model";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService{

  recipeChanged = new Subject<RecipeModel[]>();
  constructor(private shopService: ShoppingListService) {
  }

  private recipes: RecipeModel[] = []

  setRecipes(recipes:RecipeModel[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice())
  }
  getAll(): RecipeModel[]{
    return this.recipes.slice();
  }
  getOne(id: number){
    return this.recipes.slice()[id];
  }
  AddIngredients(ingredients:IngredientsModel[]) {
    this.shopService.addIngredients(ingredients);
  }

  AddRecipe(recipe:RecipeModel){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }
  UpdateRecipe(id:number, newRecipe:RecipeModel){
    this.recipes[id] = newRecipe;
    this.recipeChanged.next(this.recipes.slice())
  }
  DeleteRecipe(id:number){
    this.recipes.splice(id,1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
