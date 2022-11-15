import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-bag',
  templateUrl: './svg-bag.component.html',
  styleUrls: ['./svg-bag.component.css']
})
export class SvgBagComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
