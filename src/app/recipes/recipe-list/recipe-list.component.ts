import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() displayRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/05/04/green-pasta-FT-RECIPE0521.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/05/04/green-pasta-FT-RECIPE0521.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  displayRecipeDetail(event: Recipe) {
    this.displayRecipe.emit(event);
  }
}
