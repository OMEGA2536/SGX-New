import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.css']
})
export class BtnAddComponent implements OnInit {

  @Input() text: string = '';
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
