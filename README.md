# ngx-echarts

## 简介

Apache ECharts component for Angular（基于 Angular 的 Apache ECharts 组件）

## 安装

```bash
npm install echarts @twp0217/ngx-echarts --save
```

## 使用
- 安装依赖包：`echarts` 和 `@twp0217/ngx-echarts`

```bash
npm install echarts @twp0217/ngx-echarts --save
```

- 在module导入`NgxEchartsModule`

```typescript
import { NgxEchartsModule } from '@twp0217/ngx-echarts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 准备图表数据

```typescript
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

## API


| 名称          | 说明                                                         | 类型                                          | 默认值  |
| ------------- | ------------------------------------------------------------ | --------------------------------------------- | ------- |
| `[option]`        | 图表的配置项和数据                                           | EChartsOption                                 | -       |
| `[theme]`         | [应用的主题](https://echarts.apache.org/zh/api.html#echarts.init) | EChartsTheme                                  | -       |
| `[initOpts]`      | [初始化附加参数](https://echarts.apache.org/zh/api.html#echarts.init) | EChartsInitOpts                               | -       |
| `[setOptionOpts]` | [设置图表的配置项和数据附加参数](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) | EChartsSetOptionOpts                          | -       |
| `[autoResize]`    | 自适应图表                                                   | boolean                                       | `false` |
| `[loading]`       | 是否显示加载动画                                             | boolean                                       | -       |
| `[loadingConfig]` | [加载动画配置](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading) | EChartsLoadingConfig                          | -       |
| `[group]` | 图表的分组，用于[联动](https://echarts.apache.org/zh/api.html#echarts.connect) | string | - |
| `(onChartInit)` | 图表初始化时的回调                                           | (echartsInstance: EchartsInstance) => void    | -       |
| `[onEvents]`      | [图表事件](https://echarts.apache.org/zh/api.html#events)    | EchartsOnEvents | -       |

## 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
