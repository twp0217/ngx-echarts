import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { TabsModule, ButtonsModule } from "ngx-bootstrap";

import { NgxEchartsModule } from "@twp0217/ngx-echarts";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";

import { ChartsComponent } from "./charts/charts.component";
import { BasicComponent } from "./charts/basic.component";
import { ThemeComponent } from "./charts/theme.component";
import { SettingComponent } from "./charts/setting.component";
import { EventComponent } from "./charts/event.component";
import { CalendarComponent } from "./charts/calendar.component";
import { LoadingComponent } from './charts/loading.component';
import { GroupComponent } from "./charts/group.component";

import { DocumentationComponent } from "./documentation/documentation.component";

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    BasicComponent,
    ThemeComponent,
    SettingComponent,
    EventComponent,
    CalendarComponent,
    LoadingComponent,
    DocumentationComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    TabsModule.forRoot(),
    ButtonsModule.forRoot(),

    NgxEchartsModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
