import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-circle-delete',
  templateUrl: './svg-circle-delete.component.html',
  styleUrls: ['./svg-circle-delete.component.css']
})
export class SvgCircleDeleteComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
