import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-add',
  templateUrl: './svg-add.component.html',
  styleUrls: ['./svg-add.component.css']
})
export class SvgAddComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
