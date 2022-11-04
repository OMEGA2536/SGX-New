import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-person-search-modal',
  templateUrl: './person-search-modal.component.html',
  styleUrls: ['./person-search-modal.component.css']
})
export class PersonSearchModalComponent implements OnInit {

  @Input() visible : boolean = false;
  @Output() close = new EventEmitter();
  @Output() emitPerson = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addPerson(): void {
    // logic filter 

    alert('Add person');
    const resultFilter = {}

    this.emitPerson.emit(resultFilter);
  }
}
