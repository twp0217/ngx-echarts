# ngx-echarts

## 简介
基于angular(v2+)的echarts组件

## 安装

```javascript
npm install @twp0217/ngx-echarts --save
```

### 注：如果编译错误，提示如下，请安装依赖`@types/echarts`或者升级`typescript`版本到2.1以上

> ngx-echarts.component.ts (3,26): Cannot find module 'echarts'

```javascript
npm install @types/echarts --save-dev
```

## 使用
- 安装依赖包：`echarts` 和 `@twp0217/ngx-echarts`

```javascript
npm install echarts @twp0217/ngx-echarts --save
```

- 在module导入`NgxEchartsModule`

```javascript
import { NgxEchartsModule } from '@twp0217/ngx-echarts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 准备图表数据

```javascript
option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};
```

- 在模板页面使用

```html
<ngx-echarts [option]="option"></ngx-echarts>
```

### system.js 配置
在 `map` 中添加以下配置

```javascript
map: {
  'ngx-echarts': 'npm:ngx-echarts/bundles/ngx-echarts.umd.min.js'
}
```

# 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。

# [文档](https://twp0217.github.io/ngx-echarts/#/documentation)

## 属性(Attributes)
名称 | 类型 | 默认值 | 说明
---|---|---|---
theme | object/string | - | 主题
initOpts | EChartInitOption | - | 初始化参数 
option | object | - | [配置项](http://echarts.baidu.com/option.html)
group | string | - | 图表的分组
setOptionConfig | EChartSetOptionConfig | { notMerge: true } | setOption参数 
loading | boolean | - | 加载动画 
loadingType | string | default | 加载动画类型 
loadingOpts | object | - | 加载动画配置项 

## 事件(Events)
名称 | 返回值 | 说明
---|---|---
onBeforeInit | - | 图表初始化前
onAfterInit | - | 图表初始化后
onOptionChange | option: EChartOption | 图表配置项变更

## 方法(Methods)
名称 | 参数 | 返回类型 | 说明
---|---|---|---
getWidth | - | number | 获取 ECharts 实例容器的宽度
getHeight | - | number | 获取 ECharts 实例容器的高度
getDom | - | HTMLCanvasElement|HTMLDivElement 
getOption | - | EChartOption | 获取当前实例中维护的option对象
resize | EChartsResizeOption | - | 改变图表尺寸，在容器大小发生改变时需要手动调用
dispatchAction | (payload: object) | - | 触发图表行为
on | (eventName: string, handler: Function, context?: Object) | - | 绑定事件处理函数
off | (eventName: string, handler?: Function) | - | 解绑事件处理函数
getDataURL | { type?: string; pixelRatio?: number; backgroundColor?: string; excludeComponents?: string[]; } | - | 导出图表图片，返回一个 base64 的 URL 
getConnectedDataURL | { type?: string; pixelRatio?: number; backgroundColor?: string; excludeComponents?: string[]; } | - | 导出图表图片，返回一个 base64 的 URL 
appendData | { seriesIndex?: string, data?: Array \| TypedArray } | -  | 此接口用于，在大数据量（百万以上）的渲染场景，分片加载数据和增量渲染
clear | - | - | 清空当前实例，会移除实例中所有的组件和图表
isDisposed | - | boolean | 当前实例是否已经被释放
dispose | - | - | 销毁实例，销毁后实例无法再被使用
