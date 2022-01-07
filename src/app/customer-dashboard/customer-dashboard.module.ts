import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports:[
    CustomerProfileComponent,
    MatSliderModule
  ]
})
export class CustomerDashboardModule { }
