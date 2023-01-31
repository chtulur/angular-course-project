import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() displayRecipeDetail = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  handleOpenRecipe() {
    this.displayRecipeDetail.emit();
  }
}
