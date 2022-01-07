import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    SignInComponent
  ]
})
export class LoginModule { }
