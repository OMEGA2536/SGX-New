import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { PersonComponent } from './person/person.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'acceso',
    component:AccessComponent,
  },
  {
    path:'personal',
    component:StaffComponent,
  },
  {
    path:'perfiles',
    component:ProfileComponent,
  },
  {
    path:'persona',
    component:PersonComponent,
  },
  {
    path:'roles',
    component:RoleComponent,
  },
  {
    path:'usuarios',
    component:UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUserRoutingModule { }
