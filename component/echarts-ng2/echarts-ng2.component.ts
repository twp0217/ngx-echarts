import { Component, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'echarts-ng2',
  template: ''
})
export class EchartsNg2Component implements OnChanges, OnInit, OnDestroy {
  private chart: ECharts;

  @Input() option: EChartOption;
  @Input() theme: Object|string = "default";

  @Output() onBeforeInit: EventEmitter<any> = new EventEmitter();
  @Output() onAfterInit: EventEmitter<any> = new EventEmitter();

  @Output() onOptionChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart) {
      if (changes["option"]) {
        this.chart.setOption(this.option);
        this.onOptionChange.emit();
      }
    }
  }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.dispose();
  }

  init() {
    if (!this.chart) {
      this.onBeforeInit.emit();
      this.chart = echarts.init(this.el.nativeElement, this.theme);
      this.onAfterInit.emit();
    }
    this.option && this.chart.setOption(this.option);
  }

  dispose() {
    this.chart.dispose();
    this.chart = null;
  }

  getEchartsInstance(): ECharts {
    return this.chart;
  }
}
