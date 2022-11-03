import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-menu',
  templateUrl: './svg-menu.component.html',
  styleUrls: ['./svg-menu.component.css']
})
export class SvgMenuComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
