import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-close',
  templateUrl: './svg-close.component.html',
  styleUrls: ['./svg-close.component.css']
})
export class SvgCloseComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
