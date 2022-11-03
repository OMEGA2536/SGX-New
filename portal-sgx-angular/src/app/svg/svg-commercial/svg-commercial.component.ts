import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-commercial',
  templateUrl: './svg-commercial.component.html',
  styleUrls: ['./svg-commercial.component.css']
})
export class SvgCommercialComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
