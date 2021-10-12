import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { EChartsOption, NgxEchartsComponent } from '@twp0217/ngx-echarts';
import { connect } from 'echarts';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less'],
})
export class GroupComponent implements AfterViewInit {
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

  group1 = 'group';
  group2 = 'group';

  @ViewChild('echarts1', { static: false }) echarts1!: NgxEchartsComponent;
  @ViewChild('echarts2', { static: false }) echarts2!: NgxEchartsComponent;

  ngAfterViewInit(): void {
    // 方法1：设置group，联动设置的group
    connect('group');
    // 方法2：联动两个图表实例
    if (this.echarts1.echartsInstance && this.echarts2.echartsInstance) {
      connect([this.echarts1.echartsInstance, this.echarts2.echartsInstance]);
    }
  }
}
