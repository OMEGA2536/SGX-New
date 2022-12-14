import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUsersRoutingModule } from './system-users-routing.module';
import { PersonComponent } from './person/person.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { AccessComponent } from './access/access.component';
import { ComponentsModule } from '../components/components.module';
import { SvgModule } from '../svg/svg.module';
import { BarsModule } from '../bars/bars.module';
import { PersonRegisterComponent } from './person/person-register/person-register.component';
import { PersonDataRegisterFormComponent } from './person/person-data-register-form/person-data-register-form.component';
import { OrganizationalDataRegisterFormComponent } from './person/organizational-data-register-form/organizational-data-register-form.component';
import { PersonRecordComponent } from './person/person-record/person-record.component';
import { PersonSearchModalComponent } from './person/person-search-modal/person-search-modal.component';
import { PersonDetailsModalComponent } from './person/person-details-modal/person-details-modal.component';
import { ModalAttachmentsComponent } from './person/modal-attachments/modal-attachments.component';

@NgModule({
  declarations: [
    PersonComponent,
    UserComponent,
    ProfileComponent,
    RoleComponent,
    AccessComponent,
    PersonRegisterComponent,
    PersonDataRegisterFormComponent,
    OrganizationalDataRegisterFormComponent,
    PersonRecordComponent,
    PersonSearchModalComponent,
    PersonDetailsModalComponent,
    ModalAttachmentsComponent,
  ],
  imports: [
    CommonModule,
    SystemUsersRoutingModule,
    ComponentsModule,
    SvgModule,
    BarsModule
  ]
})
export class SystemUsersModule { }
