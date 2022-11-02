import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { PersonRegisterFormInsertionDirective } from './person-register-form-insertion.directive';


@NgModule({
  declarations: [
    PersonRegisterFormInsertionDirective
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ]
})
export class DirectiveModule { }
