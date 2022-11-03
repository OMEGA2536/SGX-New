import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-info',
  templateUrl: './svg-info.component.html',
  styleUrls: ['./svg-info.component.css']
})
export class SvgInfoComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
