import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {

  @Output() close = new EventEmitter();
  @Input() visible: boolean = true;
  @Input() text: string = "Este es un texto"

  constructor() { }

  ngOnInit(): void {
  }

}
