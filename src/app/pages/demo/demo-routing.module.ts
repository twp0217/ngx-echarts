import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ThemeComponent } from './theme/theme.component';
import { InitOptsComponent } from './init-opts/init-opts.component';
import { AutoResizeComponent } from './auto-resize/auto-resize.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { LoadingComponent } from './loading/loading.component';
import { EventComponent } from './event/event.component';
import { EchartsInstanceComponent } from './echarts-instance/echarts-instance.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'init-opts', component: InitOptsComponent },
  { path: 'auto-resize', component: AutoResizeComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'event', component: EventComponent },
  { path: 'echarts-instance', component: EchartsInstanceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
