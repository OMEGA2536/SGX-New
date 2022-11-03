import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-circle-error',
  templateUrl: './svg-circle-error.component.html',
  styleUrls: ['./svg-circle-error.component.css']
})
export class SvgCircleErrorComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
