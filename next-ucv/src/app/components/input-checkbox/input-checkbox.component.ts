import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {

  @Input() checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
