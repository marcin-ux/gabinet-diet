import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DayModule } from '../day/day.module';

@NgModule({
  imports: [
    CommonModule,
    DayModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
