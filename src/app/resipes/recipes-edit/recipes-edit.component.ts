import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,private recipeService: RecipeService,private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeImg = '';
    let recipeDescription = '';
    let ingredients  = new FormArray<any>([]);
    if(this.editMode){
      let recipe = this.recipeService.getOne(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imageUrl;
      recipeDescription = recipe.description;
      for(let ingredient of recipe.ingredients){
        ingredients.push( new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount' : new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]\d*$/)])
          })
        );
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imageUrl': new FormControl(recipeImg,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients':ingredients
    })
  }
  onSubmit() {
    if(this.editMode){
      this.recipeService.UpdateRecipe(this.id,this.recipeForm.value);
    }
    else{
      this.recipeService.AddRecipe(this.recipeForm.value);

    }
    this.onCancel();
  }
  getIngredientControls() {
    return this.recipeForm.get('ingredients') as FormArray
  }
  removeIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount' : new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]\d*$/)
        ])
      })
    )
  }
}
