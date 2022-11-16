import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUsersRoutingModule } from './system-users-routing.module';
import { MyDataComponent } from './my-data/my-data.component';
import { OffersComponent } from './offers/offers.component';
import { ComponentsModule } from '../components/components.module';
import { PostOfferComponent } from './offers/post-offer/post-offer.component';


@NgModule({
  declarations: [
    MyDataComponent,
    OffersComponent,
    PostOfferComponent,
  ],
  imports: [
    CommonModule,
    SystemUsersRoutingModule,
    ComponentsModule,
    SvgModule
  ]
})
export class SystemUsersModule { }
