import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports:[]
})
export class CommonThemeModule {
  constructor() {
    console.log('CommonThemeModule loaded.');
 }
 }
