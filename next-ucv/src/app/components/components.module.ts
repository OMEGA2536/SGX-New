import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SvgModule
  ],
  exports: [
    SelectComponent
  ]
})
export class ComponentsModule { }
