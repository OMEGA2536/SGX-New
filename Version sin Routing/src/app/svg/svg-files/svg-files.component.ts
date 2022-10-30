import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-files',
  templateUrl: './svg-files.component.html',
  styleUrls: ['./svg-files.component.css']
})
export class SvgFilesComponent implements OnInit {

  constructor() { }

  @Input() className: string = '';

  ngOnInit(): void {
  }

}
