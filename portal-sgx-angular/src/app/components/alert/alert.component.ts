import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() visible: boolean = true;
  @Input() text: string = 'Text...';
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
