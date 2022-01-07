import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./common-theme/common-theme.module').then(m=>m.CommonThemeModule)},
  { path: 'home', component: HomeComponent },
  { path: 'customer', loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(m =>  m.CustomerDashboardModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
