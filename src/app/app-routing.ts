import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./resipes/resipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recipeStart/recipeStart.component";
import {RecipeDetailComponent} from "./resipes/resipe-detail/resipe-detail.component";
import {RecipesEditComponent} from "./resipes/recipes-edit/recipes-edit.component";


const routes : Routes = [
  {path: '',redirectTo:'/recipes',pathMatch:"full"},
  { path: 'recipes',component:RecipesComponent,children: [
      {path: '',component: RecipeStartComponent },
      {path:'new',component: RecipesEditComponent},
      {path: ':id',component: RecipeDetailComponent},
      {path: ':id/edit',component: RecipesEditComponent}
    ] },
  { path: 'shopping-list',component:ShoppingListComponent}
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouting{

}
