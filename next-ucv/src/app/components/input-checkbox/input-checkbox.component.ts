import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {

  @Input() checked: boolean = false;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
