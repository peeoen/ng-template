import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginView } from './views/login/login.view';

@NgModule({
  declarations: [LoginView],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
