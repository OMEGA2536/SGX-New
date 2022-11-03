import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SvgModule } from '../svg/svg.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SvgModule,
    ComponentsModule
  ]
})
export class AuthenticationModule { }
