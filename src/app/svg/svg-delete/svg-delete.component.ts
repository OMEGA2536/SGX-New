import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-delete',
  templateUrl: './svg-delete.component.html',
  styleUrls: ['./svg-delete.component.css']
})
export class SvgDeleteComponent implements OnInit {

  constructor() { }

  @Input() className: string = '';

  ngOnInit(): void {
  }

}
