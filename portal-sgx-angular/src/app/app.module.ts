import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SystemUsersModule } from './system-users/system-users.module';
import { DirectiveModule } from './directives/directive.module';
// import { PersonRegisterFormInsertionDirective } from './directives/person-register-form-insertion.directive';

@NgModule({
  declarations: [
    AppComponent,
    // PersonRegisterFormInsertionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthenticationModule,
    SystemUsersModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
