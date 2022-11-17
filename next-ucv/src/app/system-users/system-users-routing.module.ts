import { CandidateMyCvComponent } from './candidate-my-cv/candidate-my-cv.component';
import { CandidateMyDataComponent } from './candidate-my-data/candidate-my-data.component';
import { CompanyMyOffersComponent } from './company-my-offers/company-my-offers.component';
import { CompanyPostOfferComponent } from './company-post-offer/company-post-offer.component';
import { CompanyMyDataComponent } from './company-my-data/company-my-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'company/my-data', 
    component: CompanyMyDataComponent,
    data: {
      section: 'CompanyMyData'
    }
  },
  {
    path: 'company/post-offer', 
    component: CompanyPostOfferComponent,
    data: {
      section: 'CompanyPostOffer'
    }
  },
  {
    path: 'company/my-offers', 
    component: CompanyMyOffersComponent,
    data: {
      section: 'CompanyMyOffers'
    }
  },
  {
    path: 'candidate/my-data', 
    component: CandidateMyDataComponent,
    data: {
      section: 'CandidateMyData'
    }
  },
  {
    path: 'candidate/my-cv', 
    component: CandidateMyCvComponent,
    data: {
      section: 'CandidateMyCv'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUsersRoutingModule { }
