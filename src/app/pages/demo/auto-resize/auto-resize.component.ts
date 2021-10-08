import { Component } from '@angular/core';
import { EChartsOption } from '@twp0217/ngx-echarts';

@Component({
  selector: 'app-auto-resize',
  templateUrl: './auto-resize.component.html',
  styleUrls: ['./auto-resize.component.less'],
})
export class AutoResizeComponent {
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
}
