import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-plus',
  templateUrl: './svg-plus.component.html',
  styleUrls: ['./svg-plus.component.css']
})
export class SvgPlusComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
