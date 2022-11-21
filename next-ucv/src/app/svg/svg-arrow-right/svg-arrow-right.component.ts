import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-right',
  templateUrl: './svg-arrow-right.component.html',
  styleUrls: ['./svg-arrow-right.component.css']
})
export class SvgArrowRightComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
