import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-save',
  templateUrl: './svg-save.component.html',
  styleUrls: ['./svg-save.component.css']
})
export class SvgSaveComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
