import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-circle-success',
  templateUrl: './svg-circle-success.component.html',
  styleUrls: ['./svg-circle-success.component.css']
})
export class SvgCircleSuccessComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
