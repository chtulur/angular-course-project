import { Ingredient } from './../model/ingredient';
import { Recipe } from './../model/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  displayRecipe(event: Recipe) {
    this.recipe = event;
  }
}
