import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-pdf',
  templateUrl: './svg-pdf.component.html',
  styleUrls: ['./svg-pdf.component.css']
})
export class SvgPdfComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
