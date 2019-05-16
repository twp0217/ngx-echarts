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
  SimpleChanges,
  DoCheck
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { init, connect, disConnect } from 'echarts';
import { ECharts, EChartOption } from 'echarts';

import { EChartInitOption, EChartSetOptionConfig } from './interface';

@Component({
  selector: 'ngx-echarts',
  templateUrl: './ngx-echarts.component.html',
  styleUrls: ['./ngx-echarts.component.scss']
})
export class NgxEchartsComponent implements AfterViewInit, OnChanges, DoCheck, OnDestroy {
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
  loadingType: string = 'default';
  @Input()
  loadingOpts: object;

  @Input()
  autoResize: boolean = false;

  @Output() onInit = new EventEmitter<any>();
  @Output() onOptionChange = new EventEmitter<any>();
  // events
  @Output() onClick = new EventEmitter<any>();
  @Output() onDblClick = new EventEmitter<any>();
  @Output() onMouseDown = new EventEmitter<any>();
  @Output() onMouseMove = new EventEmitter<any>();
  @Output() onMouseUp = new EventEmitter<any>();
  @Output() onMouseOver = new EventEmitter<any>();
  @Output() onMouseOut = new EventEmitter<any>();
  @Output() onGlobalOut = new EventEmitter<any>();
  @Output() onContextMenu = new EventEmitter<any>();
  // action events
  @Output() onLegendSelectChanged = new EventEmitter<any>();
  @Output() onLegendSelected = new EventEmitter<any>();
  @Output() onLegendUnSelected = new EventEmitter<any>();
  @Output() onLegendScroll = new EventEmitter<any>();
  @Output() onDataZoom = new EventEmitter<any>();
  @Output() onDataRangeSelected = new EventEmitter<any>();
  @Output() onTimelineChanged = new EventEmitter<any>();
  @Output() onTimelinePlayChanged = new EventEmitter<any>();
  @Output() onRestore = new EventEmitter<any>();
  @Output() onDataViewChanged = new EventEmitter<any>();
  @Output() onMagicTypeChanged = new EventEmitter<any>();
  @Output() onGeoSelectChanged = new EventEmitter<any>();
  @Output() onGeoSelected = new EventEmitter<any>();
  @Output() onGeoUnSelected = new EventEmitter<any>();
  @Output() onPieSelectChanged = new EventEmitter<any>();
  @Output() onPieSelected = new EventEmitter<any>();
  @Output() onPieUnSelected = new EventEmitter<any>();
  @Output() onMapSelectChanged = new EventEmitter<any>();
  @Output() onMapSelected = new EventEmitter<any>();
  @Output() onMapUnSelected = new EventEmitter<any>();
  @Output() onAxisAreaSelected = new EventEmitter<any>();
  @Output() onFocusNodeAdjacency = new EventEmitter<any>();
  @Output() onUnfocusNodeAdjacency = new EventEmitter<any>();
  @Output() onBrush = new EventEmitter<any>();
  @Output() onBrushSelected = new EventEmitter<any>();
  @Output() onGlobalCursorTaken = new EventEmitter<any>();
  @Output() onRendered = new EventEmitter<any>();
  @Output() onFinished = new EventEmitter<any>();

  private echartsInstance: ECharts;

  private offsetWidth: number;
  private offsetHeight: number;
  private resize$: Subscription;

  @ViewChild('host')
  private host: ElementRef;

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.resize());
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.theme && !changes.theme.isFirstChange()) {
      this.dispose();
      this.init();
    }
    if (changes.option && !changes.option.isFirstChange()) {
      if (this.echartsInstance) {
        this.setOption();
      }
    }
    if (changes.group) {
      this.toggleGroup(changes.group);
    }
    if (changes.loading) {
      this.toggleLoading();
    }
  }

  ngDoCheck(): void {
    this.resize();
  }

  ngOnDestroy(): void {
    this.dispose();
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
  }

  private init(): void {
    if (!this.echartsInstance) {
      this.offsetWidth = this.el.nativeElement.offsetWidth;
      this.offsetHeight = this.el.nativeElement.offsetHeight;
      if (!(this.initOpts && this.initOpts.height) && this.offsetHeight === 0) {
        this.el.nativeElement.style.height = '500px';
      }
      this.ngZone.runOutsideAngular(() => {
        this.echartsInstance = init(this.host.nativeElement, this.theme, this.initOpts);
        this.onInit.emit(this.echartsInstance);
        this.echartsInstance.group = this.group;
        this.buildEvent();
        this.setOption();
      });
    } else {
      this.setOption();
    }
  }

  private dispose(): void {
    this.echartsInstance.dispose();
    this.echartsInstance = null;
  }

  private setOption(): void {
    if (this.option) {
      this.echartsInstance.setOption(this.option, this.setOptionConfig);
      this.onOptionChange.emit(this.option);
    }
  }

  private toggleGroup(change: SimpleChange): void {
    if (change.previousValue) {
      disConnect(change.previousValue);
    }
    if (change.currentValue) {
      connect(change.currentValue);
    }
  }

  private toggleLoading(): void {
    if (this.echartsInstance) {
      if (this.loading) {
        this.echartsInstance.showLoading(this.loadingType, this.loadingOpts);
      } else {
        this.echartsInstance.hideLoading();
      }
    }
  }

  private buildEvent(): void {
    // events
    this.echartsInstance.on('click', (event: any) => this.ngZone.run(() => this.onClick.emit(event)));
    this.echartsInstance.on('dblclick', (event: any) => this.ngZone.run(() => this.onDblClick.emit(event)));
    this.echartsInstance.on('mousedown', (event: any) => this.ngZone.run(() => this.onMouseDown.emit(event)));
    this.echartsInstance.on('mousemove', (event: any) => this.ngZone.run(() => this.onMouseMove.emit(event)));
    this.echartsInstance.on('mouseup', (event: any) => this.ngZone.run(() => this.onMouseUp.emit(event)));
    this.echartsInstance.on('mouseover', (event: any) => this.ngZone.run(() => this.onMouseOver.emit(event)));
    this.echartsInstance.on('mouseout', (event: any) => this.ngZone.run(() => this.onMouseOut.emit(event)));
    this.echartsInstance.on('globalout', (event: any) => this.ngZone.run(() => this.onGlobalOut.emit(event)));
    this.echartsInstance.on('contextmenu', (event: any) => this.ngZone.run(() => this.onContextMenu.emit(event)));
    // action events
    this.echartsInstance.on('legendselectchanged', (event: any) => this.ngZone.run(() => this.onLegendSelectChanged.emit(event)));
    this.echartsInstance.on('legendselected', (event: any) => this.ngZone.run(() => this.onLegendSelected.emit(event)));
    this.echartsInstance.on('legendunselected', (event: any) => this.ngZone.run(() => this.onLegendUnSelected.emit(event)));
    this.echartsInstance.on('legendscroll', (event: any) => this.ngZone.run(() => this.onLegendScroll.emit(event)));
    this.echartsInstance.on('datazoom', (event: any) => this.ngZone.run(() => this.onDataZoom.emit(event)));
    this.echartsInstance.on('datarangeselected', (event: any) => this.ngZone.run(() => this.onDataRangeSelected.emit(event)));
    this.echartsInstance.on('timelinechanged', (event: any) => this.ngZone.run(() => this.onTimelineChanged.emit(event)));
    this.echartsInstance.on('timelineplaychanged', (event: any) => this.ngZone.run(() => this.onTimelinePlayChanged.emit(event)));
    this.echartsInstance.on('restore', (event: any) => this.ngZone.run(() => this.onRestore.emit(event)));
    this.echartsInstance.on('dataviewchanged', (event: any) => this.ngZone.run(() => this.onDataViewChanged.emit(event)));
    this.echartsInstance.on('magictypechanged', (event: any) => this.ngZone.run(() => this.onMagicTypeChanged.emit(event)));
    this.echartsInstance.on('geoselectchanged', (event: any) => this.ngZone.run(() => this.onGeoSelectChanged.emit(event)));
    this.echartsInstance.on('geoselected', (event: any) => this.ngZone.run(() => this.onGeoSelected.emit(event)));
    this.echartsInstance.on('geounselected', (event: any) => this.ngZone.run(() => this.onGeoUnSelected.emit(event)));
    this.echartsInstance.on('pieselectchanged', (event: any) => this.ngZone.run(() => this.onPieSelectChanged.emit(event)));
    this.echartsInstance.on('pieselected', (event: any) => this.ngZone.run(() => this.onPieSelected.emit(event)));
    this.echartsInstance.on('pieunselected', (event: any) => this.ngZone.run(() => this.onPieUnSelected.emit(event)));
    this.echartsInstance.on('mapselectchanged', (event: any) => this.ngZone.run(() => this.onMapSelectChanged.emit(event)));
    this.echartsInstance.on('mapselected', (event: any) => this.ngZone.run(() => this.onMapSelected.emit(event)));
    this.echartsInstance.on('mapunselected', (event: any) => this.ngZone.run(() => this.onMapUnSelected.emit(event)));
    this.echartsInstance.on('axisareaselected', (event: any) => this.ngZone.run(() => this.onAxisAreaSelected.emit(event)));
    this.echartsInstance.on('focusNodeAdjacency', (event: any) => this.ngZone.run(() => this.onFocusNodeAdjacency.emit(event)));
    this.echartsInstance.on('unfocusNodeAdjacency', (event: any) => this.ngZone.run(() => this.onUnfocusNodeAdjacency.emit(event)));
    this.echartsInstance.on('brush', (event: any) => this.ngZone.run(() => this.onBrush.emit(event)));
    this.echartsInstance.on('brushselected', (event: any) => this.ngZone.run(() => this.onBrushSelected.emit(event)));
    this.echartsInstance.on('globalcursortaken', (event: any) => this.ngZone.run(() => this.onGlobalCursorTaken.emit(event)));
    this.echartsInstance.on('rendered', (event: any) => this.ngZone.run(() => this.onRendered.emit(event)));
    this.echartsInstance.on('finished', (event: any) => this.ngZone.run(() => this.onFinished.emit(event)));
  }

  private resize(): void {
    if (this.autoResize && this.echartsInstance) {
      const offsetWidth = this.el.nativeElement.offsetWidth;
      const offsetHeight = this.el.nativeElement.offsetHeight;

      if (this.offsetWidth !== offsetWidth || this.offsetHeight !== offsetHeight) {
        this.offsetWidth = offsetWidth;
        this.offsetHeight = offsetHeight;
        this.echartsInstance.resize();
      }
    }
  }
}
