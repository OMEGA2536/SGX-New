import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarsRoutingModule } from './bars-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SvgModule } from '../svg/svg.module';


@NgModule({
  declarations: [
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    BarsRoutingModule,
    SvgModule
  ],
  exports: [
    TopBarComponent,
    SideBarComponent
  ]
})
export class BarsModule { }
