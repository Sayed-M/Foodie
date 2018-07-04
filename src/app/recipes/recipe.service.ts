import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
    'First Recipe added dynamically', 
    'Here you can find the description of the first Recipe which is added dynamically', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2l1YsZKavFYWPludPckfQ6jlkde4bH1YoYqi6xicyW40UgPNx',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe(
      'Second Recipe added dynamically', 
      'Here you can find the description of the second Recipe which is added dynamically', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2l1YsZKavFYWPludPckfQ6jlkde4bH1YoYqi6xicyW40UgPNx',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    // to get a copy from the array & not to edit the original one above.
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
