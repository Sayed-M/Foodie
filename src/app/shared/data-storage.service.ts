import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {

  }

  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://foodie-dfd44.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipe() {
    const token = this.authService.getToken();
    this.http.get('https://foodie-dfd44.firebaseio.com/recipe.json?auth=' + token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}
