import { Component, OnInit } from '@angular/core';
import { EChartsLoadingConfig, EChartsOption } from '@twp0217/ngx-echarts';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less'],
})
export class LoadingComponent {
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

  loading: boolean = false;

  loadingConfig: EChartsLoadingConfig = {
    opts: {
      text: '加载中...',
    },
  };

  toggleLoading(): void {
    console.error('toggleLoading')
    this.loading = !this.loading;
  }
}
