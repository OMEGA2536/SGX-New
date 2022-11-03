import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-filter',
  templateUrl: './svg-filter.component.html',
  styleUrls: ['./svg-filter.component.css']
})
export class SvgFilterComponent implements OnInit {

  @Input() className: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
