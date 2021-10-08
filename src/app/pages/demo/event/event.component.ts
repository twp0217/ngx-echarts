import { Component } from '@angular/core';
import {
  EchartsInstance,
  EchartsOnEvents,
  EChartsOption,
} from '@twp0217/ngx-echarts';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.less'],
})
export class EventComponent {
  option: EChartsOption = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  onChartInit(echartsInstance: EchartsInstance): void {
    console.log('onChartInit', echartsInstance);
  }

  onEvents: EchartsOnEvents = {
    click: (event: any) => {
      console.log('click', event);
    },
    legendselectchanged: (event: any) => {
      console.log('legendselectchanged', event);
    },
  };
}
