import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
