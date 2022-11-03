import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-administrator',
  templateUrl: './svg-administrator.component.html',
  styleUrls: ['./svg-administrator.component.css']
})
export class SvgAdministratorComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
