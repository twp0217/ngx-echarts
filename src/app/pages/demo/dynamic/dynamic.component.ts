import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption } from '@twp0217/ngx-echarts';

interface DataItem {
  name: string;
  value: [string, number];
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.less'],
})
export class DynamicComponent implements OnInit, OnDestroy {
  private data: DataItem[] = [];
  private now = new Date(1997, 9, 3);
  private oneDay = 24 * 3600 * 1000;
  private value = Math.random() * 1000;

  option: EChartsOption = {};
  intervel: any;

  randomData(): DataItem {
    this.now = new Date(+this.now + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [
          this.now.getFullYear(),
          this.now.getMonth() + 1,
          this.now.getDate(),
        ].join('/'),
        Math.round(this.value),
      ],
    };
  }

  getOption(data: DataItem[]): EChartsOption {
    return {
      title: {
        text: 'Dynamic Data & Time Axis',
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          showSymbol: false,
          data: data,
        },
      ],
    };
  }

  ngOnInit(): void {
    for (var i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }
    this.option = this.getOption(this.data);
    this.intervel = setInterval(() => {
      for (var i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }
      this.option = this.getOption(this.data);
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervel) {
      clearInterval(this.intervel);
    }
  }
}
