import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgRoutingModule } from './svg-routing.module';
import { SvgLogoComponent } from './svg-logo/svg-logo.component';
import { SvgTriangleDownComponent } from './svg-triangle-down/svg-triangle-down.component';


@NgModule({
  declarations: [
    SvgLogoComponent,
    SvgTriangleDownComponent
  ],
  imports: [
    CommonModule,
    SvgRoutingModule
  ],
  exports: [
    SvgLogoComponent,
    SvgTriangleDownComponent
  ]
})
export class SvgModule { }
