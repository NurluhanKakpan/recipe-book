import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../models/recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './resipe-item.component.html',
  styleUrls: ['./resipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel;
  @Input() index : number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
