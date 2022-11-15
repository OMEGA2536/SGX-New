import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-calendar',
  templateUrl: './svg-calendar.component.html',
  styleUrls: ['./svg-calendar.component.css']
})
export class SvgCalendarComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
