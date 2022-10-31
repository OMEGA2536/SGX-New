import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-info',
  templateUrl: './svg-info.component.html',
  styleUrls: ['./svg-info.component.css']
})
export class SvgInfoComponent implements OnInit {

  constructor() { }

  @Input() className: string = '';

  ngOnInit(): void {
  }

}
