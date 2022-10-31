import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HourManagerComponent } from './hour_manager/hour-manager/hour-manager.component';
import { HourRegisterComponent } from './hour_manager/hour-register/hour-register.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { PersonalComponent } from './personal/personal/personal.component';
import { SvgModule } from './svg/svg.module';

@NgModule({
  declarations: [
    AppComponent,    
    HourManagerComponent,
    HourRegisterComponent,
    CardComponent,
    ModalComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
