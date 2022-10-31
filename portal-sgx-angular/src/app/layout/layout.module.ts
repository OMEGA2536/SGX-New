import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { BarsModule } from '../bars/bars.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,   
    BarsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutModule { }
