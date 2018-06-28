import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
    'First Recipe added dynamically', 
    'Here you can find the description of the first Recipe which is added dynamically', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2l1YsZKavFYWPludPckfQ6jlkde4bH1YoYqi6xicyW40UgPNx'),
    new Recipe(
      'First Recipe added dynamically', 
      'Here you can find the description of the first Recipe which is added dynamically', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2l1YsZKavFYWPludPckfQ6jlkde4bH1YoYqi6xicyW40UgPNx')
  ];

  constructor() { }

  ngOnInit() {
  }

}
