import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-megaphone',
  templateUrl: './svg-megaphone.component.html',
  styleUrls: ['./svg-megaphone.component.css']
})
export class SvgMegaphoneComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
