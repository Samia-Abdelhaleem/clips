import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  // binding form control
  @Input() control: UntypedFormControl = new UntypedFormControl();

  // i will use the same input validation for text & email so i must differentiate between them
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() format = '';
  constructor() {
    // this.control
  }

  ngOnInit(): void {}
}
