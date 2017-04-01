import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { TabsModule } from 'ng2-bootstrap';

import { EchartsNg2Module } from 'echarts-ng2';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


import { ChartsComponent } from './charts/charts.component';
import { BasicComponent } from './charts/basic.component';
import { SettingComponent } from './charts/setting.component';
import { EventComponent } from './charts/event.component';
import { MethodComponent } from './charts/method.component';
import { CalendarComponent } from './charts/calendar.component';

import { DocumentationComponent } from './documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    BasicComponent,
    SettingComponent,
    EventComponent,
    MethodComponent,
    CalendarComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    EchartsNg2Module,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
