import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgAccessComponent } from './svg-access/svg-access.component';
import { SvgAddComponent } from './svg-add/svg-add.component';
import { SvgArrowBottomComponent } from './svg-arrow-bottom/svg-arrow-bottom.component';
import { SvgDeleteComponent } from './svg-delete/svg-delete.component';
import { SvgEditComponent } from './svg-edit/svg-edit.component';
import { SvgFileComponent } from './svg-file/svg-file.component';
import { SvgFilesComponent } from './svg-files/svg-files.component';
import { SvgFilterComponent } from './svg-filter/svg-filter.component';
import { SvgInfoComponent } from './svg-info/svg-info.component';
import { SvgLogoComponent } from './svg-logo/svg-logo.component';
import { SvgMenuComponent } from './svg-menu/svg-menu.component';
import { SvgOperationsComponent } from './svg-operations/svg-operations.component';
import { SvgUpdateComponent } from './svg-update/svg-update.component';
import { SvgUserComponent } from './svg-user/svg-user.component';

@NgModule({
  declarations: [
    SvgAccessComponent,
    SvgAddComponent,
    SvgArrowBottomComponent,
    SvgDeleteComponent,
    SvgEditComponent,
    SvgFileComponent,
    SvgFilesComponent,
    SvgFilterComponent,
    SvgInfoComponent,
    SvgLogoComponent,
    SvgMenuComponent,
    SvgOperationsComponent,
    SvgUpdateComponent,
    SvgUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgAccessComponent,
    SvgAddComponent,
    SvgArrowBottomComponent,
    SvgDeleteComponent,
    SvgEditComponent,
    SvgFileComponent,
    SvgFilesComponent,
    SvgFilterComponent,
    SvgInfoComponent,
    SvgLogoComponent,
    SvgMenuComponent,
    SvgOperationsComponent,
    SvgUpdateComponent,
    SvgUserComponent,
  ]
})
export class SvgModule { }
