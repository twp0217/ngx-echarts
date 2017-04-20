# echarts-ng2

## 简介
基于angular2的echarts组件

## 安装

```
npm install echarts-ng2 --save
```

### 注：如果编译错误，提示如下，请安装依赖`@types/echarts`或者升级`typescript`版本到2.1以上

> echarts-ng2.component.ts (3,26): Cannot find module 'echarts'

```
npm install @types/echarts --save-dev
```

## 使用
- 安装依赖包：`echarts` 和 `echarts-ng2`

```
npm install --save echarts echarts-ng2
```

- 在module导入`EchartsNg2Module`

```
import { EchartsNg2Module } from 'echarts-ng2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EchartsNg2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 准备图表数据

```
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

```
<echarts-ng2 [option]="option" style="width: 800px; height: 500px;"></echarts-ng2>
```

# 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。

# [文档](https://twp0217.github.io/echarts-ng2/#/documentation)

## 属性(Attributes)
名称 | 类型 | 默认值 | 说明
---|---|---|---
theme | Object/string | default | 主题
option | Object | null | [配置项](http://echarts.baidu.com/option.html)
style | Object | - | 样式

## 事件(Events)
名称 | 返回值 | 说明
---|---|---
onBeforeInit | - | 图表初始化前
onAfterInit | - | 图表初始化后
onOptionChange | option: EChartOption | 图表配置项变更

## 方法(Methods)
名称 | 参数 | 返回类型 | 说明
---|---|---|---
setOption | (option: EChartOption, notMerge?: boolean, lazyUpdate?: boolean) | - | 设置图表实例的配置项以及数据
getWidth | - | number | 获取 ECharts 实例容器的宽度
getHeight | - | number | 获取 ECharts 实例容器的高度
getDom | - | HTMLCanvasElement|HTMLDivElement | 获取 ECharts 实例容器的 dom 节点
getOption | - | EChartOption | 获取当前实例中维护的option对象
resize | - | - | 改变图表尺寸，在容器大小发生改变时需要手动调用
dispatchAction | (payload: Object) | - | 触发图表行为
on | (eventName: string, handler: Function, context?: Object) | - | 绑定事件处理函数
off | (eventName: string, handler?: Function) | - | 解绑事件处理函数
showLoading | (type?: string, opts?: Object) | - | 显示加载动画效果
hideLoading | - | - | 隐藏动画加载效果
clear | - | - | 清空当前实例，会移除实例中所有的组件和图表
isDisposed | - | boolean | 当前实例是否已经被释放
dispose | - | - | 销毁实例，销毁后实例无法再被使用

---

# 示例(基于[angular-cli](https://github.com/angular/angular-cli)创建)，[演示地址](https://twp0217.github.io/echarts-ng2/)
