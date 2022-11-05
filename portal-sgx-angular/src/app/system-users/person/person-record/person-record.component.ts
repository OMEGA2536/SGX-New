import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-record',
  templateUrl: './person-record.component.html',
  styleUrls: ['./person-record.component.css']
})
export class PersonRecordComponent implements OnInit {

  visibleModalInfo: boolean = false;
  visibleSuccessfulRegistrationModal: boolean = false;
  visibleDependenciesListModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalInfo(): void {
    this.visibleModalInfo = !this.visibleModalInfo;
  }

  closeSuccessfulRegistrationModal(): void {
    this.visibleSuccessfulRegistrationModal = false;
  }

  openDependenciesListModal(): void {
    this.visibleDependenciesListModal = true;
  }

  closeDependenciesListModal(): void {
    this.visibleDependenciesListModal = false;
  }
}
