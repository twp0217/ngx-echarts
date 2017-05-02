import { Component, ViewChild } from '@angular/core';

import { EChartOption, ECharts } from 'echarts-ng2';

@Component({
    selector: 'method-charts',
    templateUrl: 'method.component.html'
})
export class MethodComponent {
    @ViewChild('echarts') echarts: ECharts;
    option: EChartOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    onEvent() {
        this.echarts.on('click', (params: Object) => {
            console.log(params);
        });
    }
    offEvent() {
        this.echarts.off('click');
    }
}