import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { PersonRegisterComponent } from './person/person-register/person-register.component';
import { PersonComponent } from './person/person.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'person',
        component:PersonComponent
      },
      {
        path:'person/register',
        component: PersonRegisterComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'role',
        component:RoleComponent
      },
      {
        path:'access',
        component:AccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUsersRoutingModule { }
