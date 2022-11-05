import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-attachments',
  templateUrl: './modal-attachments.component.html',
  styleUrls: ['./modal-attachments.component.css']
})
export class ModalAttachmentsComponent implements OnInit {

  @Input() visible : boolean = false;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
