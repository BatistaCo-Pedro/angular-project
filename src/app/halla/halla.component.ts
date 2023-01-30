import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-halla',
  templateUrl: './halla.component.html',
  styleUrls: ['./halla.component.scss']
})

export class HallaComponent {
  @Input() item = "Item1";
  @Output() boxColor = new EventEmitter<string>();

  isActive = true;
  list : number[] = [
    1,
    2,
    3,
    4,
    5
  ];
  addNewBoxColor(value : string) {
    this.boxColor.emit(value);
  }
}
