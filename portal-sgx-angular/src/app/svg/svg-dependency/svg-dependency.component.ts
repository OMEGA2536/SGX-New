import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-dependency',
  templateUrl: './svg-dependency.component.html',
  styleUrls: ['./svg-dependency.component.css']
})
export class SvgDependencyComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
