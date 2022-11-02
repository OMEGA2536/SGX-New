import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarsRoutingModule } from './bars-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SvgModule } from '../svg/svg.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { DirectiveModule } from '../directives/directive.module';

@NgModule({
  declarations: [
    TopBarComponent,
    SideBarComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    BarsRoutingModule,
    SvgModule,
    DirectiveModule
  ],
  exports: [
    TopBarComponent,
    SideBarComponent
  ]
})
export class BarsModule { }
