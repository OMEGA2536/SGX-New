import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-eye',
  templateUrl: './svg-eye.component.html',
  styleUrls: ['./svg-eye.component.css']
})
export class SvgEyeComponent implements OnInit {

  @Input() className: string = 'path-fill-white';
  
  constructor() { }

  ngOnInit(): void {
  }

}
