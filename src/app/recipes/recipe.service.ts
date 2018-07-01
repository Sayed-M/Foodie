import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
    'First Recipe added dynamically', 
    'Here you can find the description of the first Recipe which is added dynamically', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2l1YsZKavFYWPludPckfQ6jlkde4bH1YoYqi6xicyW40UgPNx'),
    new Recipe(
      'Second Recipe added dynamically', 
      'Here you can find the description of the second Recipe which is added dynamically', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2l1YsZKavFYWPludPckfQ6jlkde4bH1YoYqi6xicyW40UgPNx')
  ];

  getRecipes() {

    // to get a copy from the array & not to edit the original one above.
    return this.recipes.slice();
  }

}
