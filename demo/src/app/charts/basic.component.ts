import { Component } from '@angular/core';

@Component({
    selector: 'basic-charts',
    templateUrl: 'basic.component.html'
})
export class BasicComponent {
    option: any;

    constructor(){
        this.option = this.createOption();
    }

    update() {
        this.option = this.createOption();
    }

    private createOption(): any {
        return {
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
                data: [40 * Math.random(), 40 * Math.random(), 40 * Math.random(), 40 * Math.random(), 40 * Math.random(), 40 * Math.random()]
            }]
        };
    }
}