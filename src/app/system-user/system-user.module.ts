import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUserRoutingModule } from './system-user-routing.module';
import { PersonComponent } from './person/person.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { AccessComponent } from './access/access.component';
import { LayoutModule } from '../layout/layout.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    PersonComponent,
    StaffComponent,
    UsersComponent,
    ProfileComponent,
    RoleComponent,
    AccessComponent,
  ],
  imports: [
    CommonModule,
    SystemUserRoutingModule,
    LayoutModule,
    SvgModule
  ]
})
export class SystemUserModule { }
