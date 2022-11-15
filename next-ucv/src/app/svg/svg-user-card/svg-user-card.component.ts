import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-user-card',
  templateUrl: './svg-user-card.component.html',
  styleUrls: ['./svg-user-card.component.css']
})
export class SvgUserCardComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
