import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { DemoRoutingModule } from './demo-routing.module';
import { NgxEchartsModule } from '@twp0217/ngx-echarts';
import { BasicComponent } from './basic/basic.component';
import { ThemeComponent } from './theme/theme.component';
import { InitOptsComponent } from './init-opts/init-opts.component';
import { AutoResizeComponent } from './auto-resize/auto-resize.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { LoadingComponent } from './loading/loading.component';
import { GroupComponent } from './group/group.component';
import { EventComponent } from './event/event.component';
import { EchartsInstanceComponent } from './echarts-instance/echarts-instance.component';

@NgModule({
  declarations: [
    BasicComponent,
    ThemeComponent,
    InitOptsComponent,
    AutoResizeComponent,
    DynamicComponent,
    LoadingComponent,
    EventComponent,
    EchartsInstanceComponent,
    GroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzRadioModule,
    NgxEchartsModule,
    DemoRoutingModule,
  ],
})
export class DemoModule {}
