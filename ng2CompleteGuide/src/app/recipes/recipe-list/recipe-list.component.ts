import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { createOutput } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Simple test', 'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new Recipe('A pizza Recipe', 'Pizza recipe', 'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
