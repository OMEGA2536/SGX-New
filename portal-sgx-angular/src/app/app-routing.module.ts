import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LayoutComponent } from './layout/layout/layout.component';

const appRoutes: Routes=[
  {
    path:'',
    redirectTo:'/authentication/login',
    pathMatch:'full'
  },
  {
    path:'authentication',
    component:AuthLayoutComponent,
    loadChildren: () =>
    import('./authentication/authentication.module').then(
      (m) => m.AuthenticationModule
    ),
  },
  {
    path:'system-user',
    component:LayoutComponent,
    loadChildren: () =>
    import('./system-users/system-users.module').then(
      (m) => m.SystemUsersModule
    )
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
