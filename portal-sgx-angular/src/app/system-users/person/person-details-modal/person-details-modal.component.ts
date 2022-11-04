import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-person-details-modal',
  templateUrl: './person-details-modal.component.html',
  styleUrls: ['./person-details-modal.component.css']
})
export class PersonDetailsModalComponent implements OnInit {

  @Input() visible : boolean = false;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
