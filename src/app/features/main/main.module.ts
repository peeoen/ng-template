import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MaterialModule } from './../../shared/modules/material.module';
import { MainRoutingModule } from './main-routing.module';
import { MainView } from './views/main/main.view';

@NgModule({
  declarations: [
    MainView
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    MainRoutingModule
  ]
})
export class MainModule { }
