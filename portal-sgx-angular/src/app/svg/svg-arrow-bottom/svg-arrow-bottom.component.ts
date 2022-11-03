import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-bottom',
  templateUrl: './svg-arrow-bottom.component.html',
  styleUrls: ['./svg-arrow-bottom.component.css']
})
export class SvgArrowBottomComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
