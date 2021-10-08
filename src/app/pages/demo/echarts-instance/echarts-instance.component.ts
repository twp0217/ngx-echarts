import { Component, ViewChild } from '@angular/core';
import {
  EchartsInstance,
  EChartsOption,
  NgxEchartsComponent,
} from '@twp0217/ngx-echarts';

@Component({
  selector: 'app-echarts-instance',
  templateUrl: './echarts-instance.component.html',
  styleUrls: ['./echarts-instance.component.less'],
})
export class EchartsInstanceComponent {
  // 方法1，使用ViewChild
  @ViewChild('echarts', { static: false }) echarts!: NgxEchartsComponent;

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
    // 方法2，使用onChartInit
    console.log('onChartInit', echartsInstance);
  }

  onClick(): void {
    console.log(this.echarts.echartsInstance);
  }
}
