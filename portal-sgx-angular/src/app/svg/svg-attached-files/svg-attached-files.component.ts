import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-attached-files',
  templateUrl: './svg-attached-files.component.html',
  styleUrls: ['./svg-attached-files.component.css']
})
export class SvgAttachedFilesComponent implements OnInit {

  constructor() { }

  @Input() className: string = '';

  ngOnInit(): void {
  }

}
