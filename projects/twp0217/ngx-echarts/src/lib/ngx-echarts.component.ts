import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  NgZone,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { init } from 'echarts';
import { ResizeObserver } from '@juggle/resize-observer';
import {
  EChartsInitOpts,
  EchartsInstance,
  EChartsLoadingConfig,
  EchartsOnEvents,
  EChartsOption,
  EChartsSetOptionOpts,
  EChartsTheme,
} from './interface';

@Component({
  selector: 'ngx-echarts',
  templateUrl: './ngx-echarts.component.html',
  styleUrls: ['./ngx-echarts.component.less'],
})
export class NgxEchartsComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  @Input() option?: EChartsOption;
  @Input() theme?: EChartsTheme;
  @Input() initOpts?: EChartsInitOpts;
  @Input() setOptionOpts?: EChartsSetOptionOpts;
  @Input() autoResize: boolean = false;
  @Input() loading: boolean = false;
  @Input() loadingConfig?: EChartsLoadingConfig;

  @Output() readonly onChartInit = new EventEmitter<EchartsInstance>();

  @Input() onEvents?: EchartsOnEvents;

  public echartsInstance: EchartsInstance | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  /**
   * 创建ECharts实例
   */
  private initECharts(): void {
    if (!this.echartsInstance) {
      const offsetHeight = this.el.nativeElement.offsetHeight;
      this.initOpts = {
        ...this.initOpts,
        height: this.initOpts?.height || offsetHeight || 400,
      };
      this.ngZone.runOutsideAngular(() => {
        this.echartsInstance = init(
          this.el.nativeElement,
          this.theme,
          this.initOpts
        );
        this.onChartInit.emit(this.echartsInstance);
        this.buildResizeObserver();
        this.buildEvents();
        this.setOption();
      });
    }
  }

  /**
   * 销毁ECharts实例
   */
  private disposeECharts(): void {
    if (this.echartsInstance) {
      this.echartsInstance.dispose();
      this.echartsInstance = null;
    }
  }

  /**
   * 绑定调整大小观察者
   */
  private buildResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.resize();
    });
    this.resizeObserver.observe(this.el.nativeElement);
  }

  /**
   * 取消调整大小观察者
   */
  private disconnectResizeObserver(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  /**
   * 绑定事件
   */
  private buildEvents(): void {
    Object.entries(this.onEvents || {}).forEach(([eventName, handler]) => {
      if (this.echartsInstance) {
        this.echartsInstance.on(eventName, handler);
      }
    });
  }

  /**
   * 设置图表配置项
   */
  private setOption(): void {
    if (this.echartsInstance && this.option) {
      this.echartsInstance.setOption(this.option, this.setOptionOpts);
    }
  }

  /**
   * 调整大小
   */
  private resize(): void {
    if (this.autoResize && this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  /**
   * 切换Loading
   */
  private toggleLoading(): void {
    if (this.echartsInstance) {
      if (this.loading) {
        this.echartsInstance.showLoading(
          this.loadingConfig?.type,
          this.loadingConfig?.opts
        );
      } else {
        this.echartsInstance.hideLoading();
      }
    }
  }

  ngAfterViewInit(): void {
    this.initECharts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { option, theme, initOpts, loading } = changes;
    if (option) {
      this.setOption();
    }
    if (theme || initOpts) {
      this.disposeECharts();
      this.initECharts();
    }
    if (loading) {
      this.toggleLoading();
    }
  }

  ngOnDestroy(): void {
    this.disposeECharts();
    this.disconnectResizeObserver();
  }
}
