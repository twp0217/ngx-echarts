import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnDestroy,
  NgZone,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  HostListener
} from "@angular/core";
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { init, connect, disConnect } from "echarts";
import {
  ECharts,
  EChartOption
} from "echarts";

import {
  EChartInitOption,
  EChartSetOptionConfig
} from "./interface";

@Component({
  selector: "ngx-echarts",
  templateUrl: './ngx-echarts.component.html',
  styleUrls: ['./ngx-echarts.component.scss']
})
export class NgxEchartsComponent implements OnInit, AfterViewInit, OnChanges, DoCheck, OnDestroy {
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

  private echartsInstance: ECharts;

  private offsetWidth: number;
  private offsetHeight: number;
  private resizeSubject$ = new Subject<void>();
  private resizeSubscription$: Subscription;

  @ViewChild("host")
  private host: ElementRef;

  constructor(private el: ElementRef, private ngZone: NgZone) { }
  
  @HostListener('window:resize', ['$event'])
  windowResize(event: Event): void {
    this.autoResize && this.resizeSubject$.next();
  }

  ngOnInit(): void {
    this.buildResizeSubscribe();
  }

  ngAfterViewInit(): void {
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
    this.autoResize && this.resizeSubject$.next();
  }

  ngOnDestroy(): void {
    this.dispose();
    if (this.resizeSubscription$) {
      this.resizeSubscription$.unsubscribe();
    }
  }

  private init(): void {
    if (!this.echartsInstance) {
      this.offsetWidth = this.el.nativeElement.offsetWidth;
      this.offsetHeight = this.el.nativeElement.offsetHeight;
      if (!(this.initOpts && this.initOpts.height) && this.offsetHeight === 0) {
        this.el.nativeElement.style.height = "500px";
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
    this.echartsInstance.on('click', (event: any) => this.ngZone.run(() => this.onClick.emit(event)));
    this.echartsInstance.on('dblclick', (event: any) => this.ngZone.run(() => this.onDblClick.emit(event)));
    this.echartsInstance.on('mousedown', (event: any) => this.ngZone.run(() => this.onMouseDown.emit(event)));
    this.echartsInstance.on('mousemove', (event: any) => this.ngZone.run(() => this.onMouseMove.emit(event)));
    this.echartsInstance.on('mouseup', (event: any) => this.ngZone.run(() => this.onMouseUp.emit(event)));
    this.echartsInstance.on('mouseover', (event: any) => this.ngZone.run(() => this.onMouseOver.emit(event)));
    this.echartsInstance.on('mouseout', (event: any) => this.ngZone.run(() => this.onMouseOut.emit(event)));
    this.echartsInstance.on('globalout', (event: any) => this.ngZone.run(() => this.onGlobalOut.emit(event)));
    this.echartsInstance.on('contextmenu', (event: any) => this.ngZone.run(() => this.onContextMenu.emit(event)));
  }

  private buildResizeSubscribe(): void {
    this.resizeSubscription$ = this.resizeSubject$.pipe(debounceTime(100)).subscribe(() => {
      if (this.echartsInstance) {
        const offsetWidth = this.el.nativeElement.offsetWidth;
        const offsetHeight = this.el.nativeElement.offsetHeight;

        if (this.offsetWidth !== offsetWidth || this.offsetHeight !== offsetHeight) {
          this.offsetWidth = offsetWidth;
          this.offsetHeight = offsetHeight;
          this.resize();
        }
      }
    });
  }

  private resize(): void {
    this.echartsInstance.resize();
  }
}
