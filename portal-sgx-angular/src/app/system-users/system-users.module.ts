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

@NgModule({
  declarations: [
    PersonComponent,
    UserComponent,
    ProfileComponent,
    RoleComponent,
    AccessComponent,
    PersonRegisterComponent
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
