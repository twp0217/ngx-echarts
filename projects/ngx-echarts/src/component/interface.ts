/**
 * init参数
 */
export interface EChartInitOption {
  devicePixelRatio?: number;
  renderer?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * setOption参数
 */
export interface EChartSetOptionConfig {
  notMerge?: boolean;
  lazyUpdate?: boolean;
  silent?: boolean;
}
