import { Component } from '@angular/core';
import { EChartsInitOpts, EChartsOption } from '@twp0217/ngx-echarts';

@Component({
  selector: 'app-init-opts',
  templateUrl: './init-opts.component.html',
  styleUrls: ['./init-opts.component.less'],
})
export class InitOptsComponent {
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

  initOpts: EChartsInitOpts = {
    renderer: 'svg'
  }
}
