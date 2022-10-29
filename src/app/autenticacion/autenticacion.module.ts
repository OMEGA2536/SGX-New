import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SvgLogoComponent } from '../svg/svg-logo/svg-logo.component';
import { SvgAccessComponent } from '../svg/svg-access/svg-access.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    SigninComponent,
    ForgotPasswordComponent,
    SvgAccessComponent,
    SvgLogoComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule
  ]
})
export class AutenticacionModule { }
