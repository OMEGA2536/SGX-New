import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUsersRoutingModule } from './system-users-routing.module';
import { MyDataComponent } from './my-data/my-data.component';
import { OffersComponent } from './offers/offers.component';
import { ComponentsModule } from '../components/components.module';
import { PostOfferComponent } from './offers/post-offer/post-offer.component';
import { CandidateMyDataComponent } from './candidate-my-data/candidate-my-data.component';
import { CandidateMyCvComponent } from './candidate-my-cv/candidate-my-cv.component';
import { CompanyMyDataComponent } from './company-my-data/company-my-data.component';
import { CompanyMyOffersComponent } from './company-my-offers/company-my-offers.component';
import { CompanyPostOfferComponent } from './company-post-offer/company-post-offer.component';
import { CompanySearchCvComponent } from './company-search-cv/company-search-cv.component';


@NgModule({
  declarations: [
    MyDataComponent,
    OffersComponent,
    PostOfferComponent,
    CandidateMyDataComponent,
    CandidateMyCvComponent,
    CompanyMyDataComponent,
    CompanyMyOffersComponent,
    CompanyPostOfferComponent,
    CompanySearchCvComponent,
  ],
  imports: [
    CommonModule,
    SystemUsersRoutingModule,
    ComponentsModule,
    SvgModule
  ]
})
export class SystemUsersModule { }
