import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { HomeComponent } from './home/home.component';
import { CommonThemeModule } from './common-theme/common-theme.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerDashboardModule,
    LoginModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    CommonThemeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
