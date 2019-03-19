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
autoResize | boolean | false | 自适应图表 

## 事件(Events)
名称 | 返回值 | 说明
---|---|---
onInit | echartsInstance | 图表初始化 
onOptionChange | option | 图表配置项变更

### Mouse events
名称 | 返回值 | 说明
---|---|---
onClick | event | click 
onDblClick | event | dblclick 
onMouseDown | event | mousedown 
onMouseMove | event | mousemove 
onMouseUp | event | mouseup 
onMouseOver | event | mouseover 
onMouseOut | event | mouseout 
onGlobalOut | event | globalout 
onContextMenu | event | contextmenu 

