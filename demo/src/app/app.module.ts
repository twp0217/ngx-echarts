import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule } from 'ng2-bootstrap';

import { EchartsNg2Module } from 'echarts-ng2';

import { AppComponent } from './app.component';
import { BasicComponent } from './charts/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EchartsNg2Module,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
