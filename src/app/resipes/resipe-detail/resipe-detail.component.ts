import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-resipe-detail',
  templateUrl: './resipe-detail.component.html',
  styleUrls: ['./resipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: RecipeModel;
  id:number;
  constructor(private recipeService: RecipeService,private route: ActivatedRoute,private router: Router) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getOne(this.id);
    })
  }

  onAddToShoppingList(){
    this.recipeService.AddIngredients(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onDelete(){
    this.recipeService.DeleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
