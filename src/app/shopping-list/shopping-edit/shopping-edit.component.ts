import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Ingredient } from './../../model/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  @Input() ingredients: Ingredient[];

  constructor() {}

  ngOnInit(): void {}

  handleAddToShoppingList() {
    this.ingredients.push({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    });
  }
}
