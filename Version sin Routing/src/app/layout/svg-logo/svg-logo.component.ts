import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-logo',
  templateUrl: './svg-logo.component.html',
  styleUrls: ['./svg-logo.component.css']
})
export class SvgLogoComponent implements OnInit {

  constructor() { }

  @Input() className: string = '';

  ngOnInit(): void {
  }

}
