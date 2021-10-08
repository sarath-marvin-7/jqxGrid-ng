import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxPivotGridModule } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';      

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxGridModule,
    jqxBarGaugeModule,
    jqxPivotGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
