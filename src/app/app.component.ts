import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  InputedItem = "Input Item"
  color = "FFFFFF"

  addColor(newColor : string) {
    this.color = newColor;
  }
}
