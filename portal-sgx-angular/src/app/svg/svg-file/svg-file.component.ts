import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-file',
  templateUrl: './svg-file.component.html',
  styleUrls: ['./svg-file.component.css']
})
export class SvgFileComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
