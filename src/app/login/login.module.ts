import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { CustomerDashboardModule } from '../customer-dashboard/customer-dashboard.module';



@NgModule({
  declarations: [
    SignInComponent,
    SingUpComponent
  ],
  imports: [
    CommonModule,
    CustomerDashboardModule
  ],
  exports:[
    SignInComponent
  ]
})
export class LoginModule { }
