export interface EChartOption {
    title?: Object,
    legend?: Object,
    grid?: Object,
    xAxis?: Object,
    yAxis?: Object,
    polar?: Object,
    radiusAxis?: Object,
    angleAxis?: Object,
    radar?: Object,
    dataZoom?: Array<Object>,
    visualMap?: Object | Array<Object>,
    tooltip?: Object,
    axisPointer?: Object,
    toolbox?: Object,
    brush?: Object,
    geo?: Object,
    parallel?: Object,
    parallelAxis?: Object,
    singleAxis?: Object,
    timeline?: Object,
    graphic?: Object | Array<Object>,
    calendar?: Object,
    series?: Array<Object>,
    color?: Array<Object>,
    backgroundColor?: string,
    textStyle?: Object,
    animation?: boolean,
    animationThreshold?: boolean,
    animationDuration?: number,
    animationEasing?: string,
    animationDelay?: number,
    animationDurationUpdate?: number,
    animationEasingUpdate?: string,
    animationDelayUpdate?: string,
    progressive?: number,
    progressiveThreshold?: number,
    blendMode?: string,
    hoverLayerThreshold?: number
}

export interface ECharts {
    setOption(option: EChartOption, notMerge?: boolean, lazyUpdate?: boolean): void;

    getWidth(): number;

    getHeight(): number;

    getDom(): HTMLCanvasElement | HTMLDivElement;

    getOption(): Object;

    resize(opts?: { width?: number | string, height?: number | string, silent?: boolean }): void;

    dispatchAction(payload: Object): void;

    on(eventName: string, handler: Function, context?: Object): void;

    off(eventName: string, handler?: Function): void;

    convertToPixel(finder: {
        seriesIndex?: number,
        seriesId?: string,
        seriesName?: string,
        geoIndex?: number,
        geoId?: string,
        geoName?: string,
        xAxisIndex?: number,
        xAxisId?: string,
        xAxisName?: string,
        yAxisIndex?: number,
        yAxisId?: string,
        yAxisName?: string,
        gridIndex?: number,
        gridId?: string
        gridName?: string
    } | string, value: Array<any> | string): Array<any> | string;

    convertFromPixel(finder: {
        seriesIndex?: number,
        seriesId?: string,
        seriesName?: string,
        geoIndex?: number,
        geoId?: string,
        geoName?: string,
        xAxisIndex?: number,
        xAxisId?: string,
        xAxisName?: string,
        yAxisIndex?: number,
        yAxisId?: string,
        yAxisName?: string,
        gridIndex?: number,
        gridId?: string
        gridName?: string
    } | string, value: Array<any> | string): Array<any> | string;

    containPixel(finder: {
        seriesIndex?: number,
        seriesId?: string,
        seriesName?: string,
        geoIndex?: number,
        geoId?: string,
        geoName?: string,
        xAxisIndex?: number,
        xAxisId?: string,
        xAxisName?: string,
        yAxisIndex?: number,
        yAxisId?: string,
        yAxisName?: string,
        gridIndex?: number,
        gridId?: string
        gridName?: string
    } | string, value: Array<any>): boolean;

    showLoading(type?: string, opts?: Object): void;

    hideLoading(): void;

    clear(): void;

    isDisposed(): boolean;

    dispose(): void;

    // ----- line -----

    connect(group: string): void;

    disconnect(group: string): void;
}
