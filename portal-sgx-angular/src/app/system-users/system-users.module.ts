import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUsersRoutingModule } from './system-users-routing.module';
import { PersonComponent } from './person/person.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { AccessComponent } from './access/access.component';


@NgModule({
  declarations: [
    PersonComponent,
    UserComponent,
    ProfileComponent,
    RoleComponent,
    AccessComponent
  ],
  imports: [
    CommonModule,
    SystemUsersRoutingModule
  ]
})
export class SystemUsersModule { }
