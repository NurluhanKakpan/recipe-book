import {IngredientsModel} from "./ingredients.model";

export class RecipeModel{
  public name: string;
  public description: string;
  public imageUrl : string;
  public ingredients: IngredientsModel[];
  constructor(name: string, description: string, imageUrl: string,ingredients:IngredientsModel[]) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
