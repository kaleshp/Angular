import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from "./model/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'This is New recipe',
      'This is a new Recicpe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-dinner-recipes-1556654658.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'This is New recipe 2',
      'This is a new Recicpe 2',
      'https://images-gmi-pmc.edge-generalmills.com/a2fa4403-15db-400d-bfaf-c59fe1459b47.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
