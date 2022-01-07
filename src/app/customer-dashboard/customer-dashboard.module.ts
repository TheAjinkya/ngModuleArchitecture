import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule,
    MatSliderModule
    
  ],
  exports:[
    CustomerProfileComponent
  ]
})
export class CustomerDashboardModule { }
