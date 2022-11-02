import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PersonRegisterFormInsertionDirective } from 'src/app/directives/person-register-form-insertion.directive';
import { OrganizationalDataRegisterFormComponent } from '../organizational-data-register-form/organizational-data-register-form.component';
import { PersonDataRegisterFormComponent } from '../person-data-register-form/person-data-register-form.component';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent implements OnInit {

  @ViewChild(PersonRegisterFormInsertionDirective, { static: true })
  personRegisterFormInsertionDirective!: PersonRegisterFormInsertionDirective;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  showForm(indexTab: number): void {
    if (indexTab == 0) {
      this.personRegisterFormInsertionDirective.container1.createComponent(PersonDataRegisterFormComponent);
    } else {
      this.personRegisterFormInsertionDirective.container1.createComponent(OrganizationalDataRegisterFormComponent);
    }
  }
}
