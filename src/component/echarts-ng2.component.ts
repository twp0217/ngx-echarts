import { Component, ElementRef, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy, NgZone } from '@angular/core';

import * as echarts from 'echarts';

import { EChartOption, ECharts } from './api';

@Component({
  selector: 'echarts-ng2',
  template: '<div #host [ngStyle]="style"></div>'
})
export class EchartsNg2Component implements AfterViewInit, OnDestroy, ECharts {
  private chart: ECharts;
  private _option: EChartOption;
  private opts = { 'height': 400 };
  private _group: string;
  private setGroup(){
    this.chart && (typeof this._group !== 'undefined') && ((<any>this.chart).group = this._group);
  }

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
  @Input()
  set group(group: string) {
    this._group = group;
    this.setGroup();
  }
  get group(): string { return this._group; }

  @Output() onBeforeInit: EventEmitter<any> = new EventEmitter();
  @Output() onAfterInit: EventEmitter<any> = new EventEmitter();
  @Output() onOptionChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('host') host;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit() {
    this.init();
  }

  ngOnDestroy() {
    this.dispose();
  }


  init = () => {
    if (!this.chart) {
      this.ngZone.runOutsideAngular(() => {
        this.onBeforeInit.emit();
        this.chart = echarts.init(this.host.nativeElement, this.theme, this.style ? {} : this.opts);
        this.onAfterInit.emit();
        this.option && this.chart.setOption(this.option);
        this.setGroup();
      });
    } else {
      this.option && this.chart.setOption(this.option);
    }
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

  resize = (opts?: { width?: number | string, height?: number | string, silent?: boolean }): void => {
    this.chart.resize(opts);
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

  // ----- line -----

  connect = (group:string): void => {
    echarts.connect(group);
  }
  
  disconnect = (group:string): void => {
    echarts.disconnect(group);
  }
}
