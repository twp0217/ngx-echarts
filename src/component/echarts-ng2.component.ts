import { Component, ElementRef, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import * as echarts from 'echarts';

import { EChartOption, ECharts } from './api';

@Component({
  selector: 'echarts-ng2',
  template: '<div #host [ngStyle]="style"></div>'
})
export class EchartsNg2Component implements AfterViewInit, OnDestroy, ECharts {
  private chart: ECharts;
  private _option: EChartOption;
  private opts = { 'height': 400 }

  @Input() theme: Object|string = "default";
  @Input()
  set option(option: EChartOption) {
    this._option = option;
    if (this.chart) {
      this.chart.setOption(option);
      this.onOptionChange.emit(option);
    }
  }
  get option(): EChartOption { return this._option; }
  @Input() style: any;

  @Output() onBeforeInit: EventEmitter<any> = new EventEmitter();
  @Output() onAfterInit: EventEmitter<any> = new EventEmitter();
  @Output() onOptionChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('host') host;

  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    this.init();
  }

  ngOnDestroy() {
    this.dispose();
  }


  init = () => {
    if (!this.chart) {
      this.onBeforeInit.emit();
      this.chart = echarts.init(this.host.nativeElement, this.theme, this.style ? {}:this.opts);
      this.onAfterInit.emit();
    }
    this.option && this.chart.setOption(this.option);
  }

  dispose = (): void => {
    this.chart.dispose();
    this.chart = null;
  }

  setOption = (option: EChartOption, notMerge?: boolean, lazyUpdate?: boolean): void => {
    this.chart.setOption(option, notMerge, lazyUpdate);
  }

  getWidth = (): number => {
    return this.chart.getWidth();
  }

  getHeight = (): number => {
    return this.chart.getHeight();
  }

  getDom = (): HTMLCanvasElement | HTMLDivElement => {
    return this.getDom();
  }

  getOption = (): Object => {
    return this.chart.getOption();
  }

  resize = (): void => {
    this.chart.resize();
  }

  dispatchAction = (payload: Object): void => {
    this.chart.dispatchAction(payload);
  }

  on = (eventName: string, handler: Function, context?: Object): void => {
    this.chart.on(eventName, handler, context);
  }

  off = (eventName: string, handler?: Function): void => {
    this.chart.off(eventName, handler);
  }

  showLoading = (type?: string, opts?: Object): void => {
    this.chart.showLoading();
  }

  hideLoading = (): void => {
    this.chart.hideLoading();
  }

  clear = (): void => {
    this.chart.clear();
  }

  isDisposed = (): boolean => {
    return this.chart ? this.chart.isDisposed():true;
  }
}
