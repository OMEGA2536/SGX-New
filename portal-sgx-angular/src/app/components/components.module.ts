import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { TabsComponent } from './tabs/tabs.component';
import { AlertComponent } from './alert/alert.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';


@NgModule({
  declarations: [
    CardComponent,
    ModalComponent,
    TabsComponent,
    AlertComponent,
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SvgModule
  ],
  exports: [
    CardComponent,
    ModalComponent,
    TabsComponent,
    AlertComponent,
    SuccessModalComponent
  ]
})
export class ComponentsModule { }
