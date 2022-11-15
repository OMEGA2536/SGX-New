import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgRoutingModule } from './svg-routing.module';
import { SvgLogoComponent } from './svg-logo/svg-logo.component';
import { SvgTriangleDownComponent } from './svg-triangle-down/svg-triangle-down.component';
import { SvgSettingComponent } from './svg-setting/svg-setting.component';
import { SvgPowerComponent } from './svg-power/svg-power.component';
import { SvgUserComponent } from './svg-user/svg-user.component';
import { SvgUserCardComponent } from './svg-user-card/svg-user-card.component';
import { SvgMegaphoneComponent } from './svg-megaphone/svg-megaphone.component';
import { SvgBagComponent } from './svg-bag/svg-bag.component';
import { SvgSearcherComponent } from './svg-searcher/svg-searcher.component';
import { SvgCalendarComponent } from './svg-calendar/svg-calendar.component';


@NgModule({
  declarations: [
    SvgLogoComponent,
    SvgTriangleDownComponent,
    SvgSettingComponent,
    SvgPowerComponent,
    SvgUserComponent,
    SvgUserCardComponent,
    SvgMegaphoneComponent,
    SvgBagComponent,
    SvgSearcherComponent,
    SvgCalendarComponent
  ],
  imports: [
    CommonModule,
    SvgRoutingModule
  ],
  exports: [
    SvgLogoComponent,
    SvgTriangleDownComponent,
    SvgSettingComponent,
    SvgPowerComponent,
    SvgUserComponent,
    SvgUserCardComponent,
    SvgMegaphoneComponent,
    SvgBagComponent,
    SvgSearcherComponent,
    SvgCalendarComponent
  ]
})
export class SvgModule { }
