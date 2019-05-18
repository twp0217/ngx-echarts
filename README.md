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

# 文档

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

### Action events
名称 | 返回值 | 说明
---|---|---
onLegendSelectChanged | event | 切换图例选中状态后的事件 
onLegendSelected | event | 图例选中后的事件 
onLegendUnSelected | event | 图例取消选中后的事件 
onLegendScroll | event | 图例滚动事件 
onDataZoom | event | 数据区域缩放后的事件 
onDataRangeSelected | event | selectDataRange 视觉映射组件中，range 值改变后触发的事件 
onTimelineChanged | event | 时间轴中的时间点改变后的事件 
onTimelinePlayChanged | event | 时间轴中播放状态的切换事件 
onRestore | event | restore 重置 option 事件 
onDataViewChanged | event | 工具栏中数据视图的修改事件 
onMagicTypeChanged | event | 工具栏中动态类型切换的切换事件 
onGeoSelectChanged | event | geo 中地图区域切换选中状态的事件 
onGeoSelected | event | geo 中地图区域选中后的事件 
onGeoUnSelected | event | geo 中地图区域取消选中后的事件 
onPieSelectChanged | event | series-pie 中饼图扇形切换选中状态的事件 
onPieSelected | event | series-pie 中饼图扇形选中后的事件 
onPieUnSelected | event | series-pie 中饼图扇形取消选中后的事件 
onMapSelectChanged | event | series-map 中地图区域切换选中状态的事件 
onMapSelected | event | series-map 中地图区域选中后的事件 
onMapUnSelected | event | series-map 中地图区域取消选中后的事件 
onAxisAreaSelected | event | 平行坐标轴 (Parallel)范围选取事件 
onFocusNodeAdjacency | event | graph的邻接节点高亮事件 
onUnfocusNodeAdjacency | event | graph的邻接节点取消高亮事件 
onBrush | event | 选框添加事件 
onBrushSelected | event | 对外通知当前选中了什么 
onGlobalCursorTaken | event | 刷选模式的开关 
onRendered | event | 渲染结束事件 
onFinished | event | 渲染完成事件 
