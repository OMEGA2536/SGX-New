import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-question',
  templateUrl: './svg-question.component.html',
  styleUrls: ['./svg-question.component.css']
})
export class SvgQuestionComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
