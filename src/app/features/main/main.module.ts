import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainView } from './views/main/main.view';

@NgModule({
  declarations: [
    MainView
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
