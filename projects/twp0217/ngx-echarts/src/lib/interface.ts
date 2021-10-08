import * as echarts from 'echarts';

type EChartsInitType = typeof echarts.init;
export type EChartsType = typeof echarts;
export type EChartsOption = echarts.EChartsOption;
export type EChartsTheme = Parameters<EChartsInitType>['1'];
export type EChartsInitOpts = Parameters<EChartsInitType>['2'];
export type EchartsInstance = echarts.EChartsType;

export interface EChartsSetOptionOpts {
  notMerge?: boolean;
  lazyUpdate?: boolean;
  silent?: boolean;
  replaceMerge?: string | string[];
}

export interface EChartsLoadingConfig {
  type?: 'default';
  opts?: object;
}

export type EchartsOnEvents = { [eventName: string]: (event: any) => void };
