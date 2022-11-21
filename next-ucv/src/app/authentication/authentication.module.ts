import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SvgModule } from '../svg/svg.module';
import { ComponentsModule } from '../components/components.module';
import { RegisterComponent } from './register/register.component';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterCandidateComponent,
    RegisterCompanyComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SvgModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthenticationModule { }
