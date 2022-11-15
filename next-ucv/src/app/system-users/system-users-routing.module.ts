import { OffersComponent } from './offers/offers.component';
import { MyDataComponent } from './my-data/my-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostOfferComponent } from './offers/post-offer/post-offer.component';

const routes: Routes = [
  {
    path: 'my-data', 
    component: MyDataComponent,
    data: {
      section: 'MyData'
    }
  },
  {
    path: 'post-offer', 
    component: PostOfferComponent,
    data: {
      section: 'PostOffer'
    }
  },
  {
    path: 'offers', 
    component: OffersComponent,
    data: {
      section: 'Offers'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUsersRoutingModule { }
