import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg-attach',
  templateUrl: './svg-attach.component.html',
  styleUrls: ['./svg-attach.component.css']
})
export class SvgAttachComponent implements OnInit {

  @Input() className: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
