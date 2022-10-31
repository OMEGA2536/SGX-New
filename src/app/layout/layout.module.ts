import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SystemLayoutComponent } from './system-layout/system-layout.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    SystemLayoutComponent,
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ]
})
export class LayoutModule { }
