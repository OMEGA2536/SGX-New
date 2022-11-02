import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CardComponent,
    ModalComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    CardComponent,
    ModalComponent,
    TabsComponent
  ]
})
export class ComponentsModule { }
