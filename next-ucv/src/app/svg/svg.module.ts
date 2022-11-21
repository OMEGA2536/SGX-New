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
import { SvgCircleSuccessComponent } from './svg-circle-success/svg-circle-success.component';
import { SvgCircleDeleteComponent } from './svg-circle-delete/svg-circle-delete.component';
import { SvgEyeComponent } from './svg-eye/svg-eye.component';
import { SvgEditComponent } from './svg-edit/svg-edit.component';
import { SvgDeleteComponent } from './svg-delete/svg-delete.component';
import { SvgArrowLeftComponent } from './svg-arrow-left/svg-arrow-left.component';
import { SvgArrowRightComponent } from './svg-arrow-right/svg-arrow-right.component';


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
    SvgCalendarComponent,
    SvgCircleSuccessComponent,
    SvgCircleDeleteComponent,
    SvgEyeComponent,
    SvgEditComponent,
    SvgDeleteComponent,
    SvgArrowLeftComponent,
    SvgArrowRightComponent
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
    SvgCalendarComponent,
    SvgCircleSuccessComponent,
    SvgCircleDeleteComponent,
    SvgEyeComponent,
    SvgEditComponent,
    SvgDeleteComponent,
    SvgArrowLeftComponent,
    SvgArrowRightComponent
  ]
})
export class SvgModule { }
