import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourManagerComponent } from './hour_manager/hour-manager/hour-manager.component';
import { HourRegisterComponent } from './hour_manager/hour-register/hour-register.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: 'iniciar-sesion', component: LoginComponent},
  {path:'app', 
    component: LayoutComponent,
    children: [
      {
        path:'gestor-de-horas', component: HourManagerComponent
      },
      {
        path:'registrar-horas', component: HourRegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
