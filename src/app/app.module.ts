import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { MenuModule } from './menu/menu.module';
import { DayModule } from './day/day.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    MenuModule,
    DayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
