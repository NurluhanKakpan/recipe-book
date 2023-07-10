import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-resipe-list',
  templateUrl: './resipe-list.component.html',
  styleUrls: ['./resipe-list.component.css']
})
export class RecipeListComponent  implements OnInit,OnDestroy {

  constructor( private recipeService: RecipeService,private router: Router,private route:ActivatedRoute){
  }


  recipes: RecipeModel[];
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged.subscribe((recipes: RecipeModel[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getAll()
  }

  onAddNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
