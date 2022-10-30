import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-access',
  templateUrl: './svg-access.component.html',
  styleUrls: ['./svg-access.component.css']
})
export class SvgAccessComponent implements OnInit {

  constructor() { }

  @Input() className: string = '';

  ngOnInit(): void {
  }

}
