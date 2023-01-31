import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() recipesOpened = new EventEmitter<boolean>();

  navigate(isOpen: boolean) {
    this.recipesOpened.emit(isOpen);
  }
}
