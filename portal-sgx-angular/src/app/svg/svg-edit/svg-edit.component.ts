import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-edit',
  templateUrl: './svg-edit.component.html',
  styleUrls: ['./svg-edit.component.css']
})
export class SvgEditComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
