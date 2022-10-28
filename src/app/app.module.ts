import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { SvgAccessComponent } from './svg/svg-access/svg-access.component';
import { SvgLogoComponent } from './svg/svg-logo/svg-logo.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HourManagerComponent } from './hour_manager/hour-manager/hour-manager.component';
import { HourRegisterComponent } from './hour_manager/hour-register/hour-register.component';
import { SvgUserComponent } from './svg/svg-user/svg-user.component';
import { SvgOperationsComponent } from './svg/svg-operations/svg-operations.component';
import { SvgMenuComponent } from './svg/svg-menu/svg-menu.component';
import { CardComponent } from './components/card/card.component';
import { SvgFilterComponent } from './svg/svg-filter/svg-filter.component';
import { SvgAddComponent } from './svg/svg-add/svg-add.component';
import { ModalComponent } from './components/modal/modal.component';
import { SvgFileComponent } from './svg/svg-file/svg-file.component';
import { SvgUpdateComponent } from './svg/svg-update/svg-update.component';
import { SvgEditComponent } from './svg/svg-edit/svg-edit.component';
import { SvgDeleteComponent } from './svg/svg-delete/svg-delete.component';
import { SvgInfoComponent } from './svg/svg-info/svg-info.component';
import { SvgFilesComponent } from './svg/svg-files/svg-files.component';
import { SvgArrowBottomComponent } from './svg/svg-arrow-bottom/svg-arrow-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SvgAccessComponent,
    SvgLogoComponent,
    LayoutComponent,
    TopBarComponent,
    SideBarComponent,
    HourManagerComponent,
    HourRegisterComponent,
    SvgUserComponent,
    SvgOperationsComponent,
    SvgMenuComponent,
    CardComponent,
    SvgFilterComponent,
    SvgAddComponent,
    ModalComponent,
    SvgFileComponent,
    SvgUpdateComponent,
    SvgEditComponent,
    SvgDeleteComponent,
    SvgInfoComponent,
    SvgFilesComponent,
    SvgArrowBottomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
