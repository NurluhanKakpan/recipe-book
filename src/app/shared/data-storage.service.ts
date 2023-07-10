import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../resipes/recipe.service";
import {RecipeModel} from "../models/recipe.model";

@Injectable({providedIn:'root'})
export class DataStorageService{
  constructor(private http:HttpClient,private recipeService:RecipeService){
  }
  storeRecipes(){
    const recipes = this.recipeService.getAll();
    this.http.put('https://recipebook-22eb0-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(
      (response:any) =>{
        console.log(response);
      }
    );
  }
  fetchRecipes(){
    this.http.get<RecipeModel[]>('https://recipebook-22eb0-default-rtdb.firebaseio.com/recipes.json').subscribe((recipes:RecipeModel[])=>{
      this.recipeService.setRecipes(recipes);
    })
  }
}
