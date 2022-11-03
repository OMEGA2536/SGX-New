import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-operations',
  templateUrl: './svg-operations.component.html',
  styleUrls: ['./svg-operations.component.css']
})
export class SvgOperationsComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
