import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

import { init, connect, disConnect } from "echarts";
import {
  ECharts,
  EChartOption,
  EChartsConvertFinder,
  TypedArray
} from "echarts";

import {
  EChartInitOption,
  EChartSetOptionConfig,
  EChartsResizeOption
} from "./interface";

@Component({
  selector: "ngx-echarts",
  template: "<div #host></div>"
})
export class NgxEchartsComponent implements AfterViewInit, OnChanges, OnDestroy {
  echartsInstance: ECharts;

  @Input()
  theme: object | string;
  @Input()
  initOpts: EChartInitOption;
  @Input()
  option: EChartOption;
  @Input()
  group: string;
  @Input()
  setOptionConfig: EChartSetOptionConfig = {
    notMerge: true
  };

  @Input()
  loading: boolean;
  @Input()
  loadingType: string = "default";
  @Input()
  loadingOpts: object;

  @Output()
  onBeforeInit: EventEmitter<any> = new EventEmitter();
  @Output()
  onAfterInit: EventEmitter<any> = new EventEmitter();
  @Output()
  onOptionChange: EventEmitter<any> = new EventEmitter();

  @ViewChild("host")
  host: ElementRef;

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["theme"] && !changes["theme"].isFirstChange()) {
      this.dispose();
      this.init();
    }
    if (changes["option"] && !changes["option"].isFirstChange()) {
      if (this.echartsInstance) {
        this.setOption();
      }
    }
    if (changes["group"]) {
      let change: SimpleChange = changes["group"];
      this.toggleGroup(change.previousValue, change.currentValue);
    }
    if (changes["loading"]) {
      this.toggleLoading();
    }
  }

  ngOnDestroy() {
    this.dispose();
  }

  init() {
    if (!this.echartsInstance) {
      if (!(this.initOpts && this.initOpts.height)) {
        this.host.nativeElement.style.height = "400px";
      }
      this.ngZone.runOutsideAngular(() => {
        this.onBeforeInit.emit();
        this.echartsInstance = init(this.host.nativeElement, this.theme, this.initOpts);
        this.onAfterInit.emit();
        this.setOption();
        this.echartsInstance.group = this.group;
      });
    } else {
      this.setOption();
    }
  }

  dispose(): void {
    this.echartsInstance.dispose();
    this.echartsInstance = null;
  }

  setOption(): void {
    if (this.option) {
      this.echartsInstance.setOption(this.option, this.setOptionConfig);
      this.onOptionChange.emit(this.option);
    }
  }

  toggleGroup(previousValue: any, currentValue: any) {
    if (previousValue) {
      disConnect(previousValue);
    }
    if (currentValue) {
      connect(currentValue);
    }
  }

  toggleLoading() {
    if (this.echartsInstance) {
      if (this.loading) {
        this.echartsInstance.showLoading(this.loadingType, this.loadingOpts);
      } else {
        this.echartsInstance.hideLoading();
      }
    }
  }

  getWidth(): number {
    return this.echartsInstance.getWidth();
  }

  getHeight(): number {
    return this.echartsInstance.getHeight();
  }

  getDom(): HTMLCanvasElement | HTMLDivElement {
    return this.echartsInstance.getDom();
  }

  getOption(): EChartOption {
    return this.echartsInstance.getOption();
  }

  resize(opts?: EChartsResizeOption): void {
    this.echartsInstance.resize(opts);
  }

  dispatchAction(payload: object): void {
    this.echartsInstance.dispatchAction(payload);
  }

  on(eventName: string, handler: Function, context?: object): void {
    this.echartsInstance.on(eventName, handler, context);
  }

  off(eventName: string, handler?: Function): void {
    this.echartsInstance.off(eventName, handler);
  }

  convertToPixel(
    finder: EChartsConvertFinder,
    value: any[] | string
  ): any[] | string {
    return this.echartsInstance.convertToPixel(finder, value);
  }

  convertFromPixel(
    finder: EChartsConvertFinder,
    value: any[] | string
  ): any[] | string {
    return this.echartsInstance.convertFromPixel(finder, value);
  }

  containPixel(finder: EChartsConvertFinder, value: any[]): boolean {
    return this.echartsInstance.containPixel(finder, value);
  }

  getDataURL(opts: {
    // 导出的格式，可选 png, jpeg
    type?: string;
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio?: number;
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor?: string;
    // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
    excludeComponents?: string[];
  }): string {
    return this.echartsInstance.getDataURL(opts);
  }

  getConnectedDataURL(opts: {
    // // 导出的格式，可选 png, jpeg
    // type?: string,
    // // 导出的图片分辨率比例，默认为 1。
    // pixelRatio?: number,
    // // 导出的图片背景色，默认使用 option 里的 backgroundColor
    // backgroundColor?: string,
    // // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
    // excludeComponents?: string[]
    // 导出的格式，可选 png, jpeg
    type: string;
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio: number;
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor: string;
    // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
    excludeComponents?: string[];
  }): string {
    return this.echartsInstance.getConnectedDataURL(opts);
  }

  appendData(opts: { seriesIndex?: string; data?: any[] | TypedArray }): void {
    this.echartsInstance.appendData(opts);
  }

  clear(): void {
    this.echartsInstance.clear();
  }

  isDisposed(): boolean {
    return this.echartsInstance ? this.echartsInstance.isDisposed() : true;
  }
}
