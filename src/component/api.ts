export interface EChartOption {
    title?: EChartTitleOption
    legend?: Object,
    grid?: Object,
    xAxis?: Object,
    yAxis?: Object,
    polar?: Object,
    radiusAxis?: Object,
    angleAxis?: Object,
    radar?: Object,
    dataZoom?: Array<Object>,
    visualMap?: Array<Object>,
    tooltip?: Object,
    toolbox?: Object,
    geo?: Object,
    parallel?: Object,
    parallelAxis?: Object,
    timeline?: Object,
    series?: Array<Object>,
    color?: Array<Object>,
    backgroundColor?: string,
    textStyle?: Object,
    animation?: boolean,
    animationDuration?: number,
    animationEasing?: string,
    animationDurationUpdate?: number,
    animationEasingUpdate?: string
}

export interface EChartTitleOption {
    show?: boolean;
    text?: string;
    link?: string,
    target?: string,
    textStyle?: Object,
    subtext?: string,
    sublink?: string,
    subtarget?: string,
    subtextStyle?: Object,
    padding?: number,
    itemGap?: number,
    zlevel?: number,
    z?: number,
    left?: string,
    top?: string,
    right?: string,
    bottom?: string,
    backgroundColor?: string,
    borderColor?: string,
    borderWidth?: number,
    shadowBlur?: number,
    shadowColor?: number,
    shadowOffsetX?: number,
    shadowOffsetY?: number,
}

export interface ECharts {
    setOption(option: EChartOption, notMerge?: boolean, lazyUpdate?: boolean): void

    getWidth(): number

    getHeight(): number

    getDom(): HTMLCanvasElement | HTMLDivElement

    getOption(): Object

    resize(): void

    dispatchAction(payload: Object): void

    on(eventName: string, handler: Function, context?: Object): void

    off(eventName: string, handler?: Function): void

    showLoading(type?: string, opts?: Object): void

    hideLoading(): void

    clear(): void

    isDisposed(): boolean

    dispose(): void
}
