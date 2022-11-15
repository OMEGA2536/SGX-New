import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-searcher',
  templateUrl: './svg-searcher.component.html',
  styleUrls: ['./svg-searcher.component.css']
})
export class SvgSearcherComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
