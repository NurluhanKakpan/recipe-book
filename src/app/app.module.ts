import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './resipes/resipes.component';
import { RecipeDetailComponent } from './resipes/resipe-detail/resipe-detail.component';
import { RecipeListComponent } from './resipes/resipe-list/resipe-list.component';
import { RecipeItemComponent } from './resipes/resipe-list/resipe-item/resipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropDownDirective} from "./shared/dropdown.directive";
import {RecipeService} from "./resipes/recipe.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRouting} from "./app-routing";
import {
  RecipeStartComponent,
} from './recipeStart/recipeStart.component';
import { RecipesEditComponent } from './resipes/recipes-edit/recipes-edit.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipesEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
