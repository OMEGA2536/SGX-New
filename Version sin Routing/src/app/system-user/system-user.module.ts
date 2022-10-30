import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUserRoutingModule } from './system-user-routing.module';
import { PersonComponent } from './person/person.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { AccessComponent } from './access/access.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SvgUserComponent } from './svg-user/svg-user.component';


@NgModule({
  declarations: [
    PersonComponent,
    StaffComponent,
    UsersComponent,
    ProfileComponent,
    RoleComponent,
    AccessComponent,
    TopBarComponent,
    SvgUserComponent
  ],
  imports: [
    CommonModule,
    SystemUserRoutingModule
  ]
})
export class SystemUserModule { }
