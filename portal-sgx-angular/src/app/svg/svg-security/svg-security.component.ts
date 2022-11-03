import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-security',
  templateUrl: './svg-security.component.html',
  styleUrls: ['./svg-security.component.css']
})
export class SvgSecurityComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
