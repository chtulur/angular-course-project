import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isRecipesOpen: boolean = true;

  navigate(event: boolean) {
    this.isRecipesOpen = event;
  }
}
