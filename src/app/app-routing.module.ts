import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourManagerComponent } from './hour_manager/hour-manager/hour-manager.component';
import { HourRegisterComponent } from './hour_manager/hour-register/hour-register.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SystemLayoutComponent } from './layout/system-layout/system-layout.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/autenticacion/login', pathMatch: 'full' 
  },
  {path:'app', 
    component: SystemLayoutComponent,
    children: [
      {
        path:'gestor-de-horas', component: HourManagerComponent
      },
      {
        path:'registrar-horas', component: HourRegisterComponent
      }
    ]
  },
  {
    path:'autenticacion',
    component: AuthLayoutComponent,
    loadChildren:()=>
      import('./autentication/autentication.module').then(
        (m) => m.AutenticacionModule
      ),    
  },
  {
    path:'usuarios',
    component: SystemLayoutComponent,
    loadChildren:() =>
    import('./system-user/system-user.module').then(
      (m) => m.SystemUserModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
