import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-user',
  templateUrl: './svg-user.component.html',
  styleUrls: ['./svg-user.component.css']
})
export class SvgUserComponent implements OnInit {

  constructor() { }

  @Input() className: string = '';

  ngOnInit(): void {
  }

}
