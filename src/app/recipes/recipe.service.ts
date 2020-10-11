import { EventEmitter } from '@angular/core';

import { Recipe } from "./model/recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
    new Recipe('This is New recipe', 'This is a new Recicpe', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-dinner-recipes-1556654658.jpg'),
    new Recipe('This is New recipe 2', 'This is a new Recicpe 2', 'https://images-gmi-pmc.edge-generalmills.com/a2fa4403-15db-400d-bfaf-c59fe1459b47.jpg')
  ];

  getRecipes() {
    return this.recipes.slice()
  }
}
