import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-arrow-left',
  templateUrl: './svg-arrow-left.component.html',
  styleUrls: ['./svg-arrow-left.component.css']
})
export class SvgArrowLeftComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
