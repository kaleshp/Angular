import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Recipe } from "../model/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('This is New recipe', 'This is a new Recicpe', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-dinner-recipes-1556654658.jpg'),
    new Recipe('This is New recipe 2', 'This is a new Recicpe 2', 'https://images-gmi-pmc.edge-generalmills.com/a2fa4403-15db-400d-bfaf-c59fe1459b47.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
