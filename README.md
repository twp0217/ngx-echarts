# echarts-ng2

## 简介
基于angular2的echarts组件

## 安装

```
npm install echarts-ng2 --save
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

## 属性(Attributes)
名称 | 类型 | 默认值 | 说明
---|---|---|---
option | Object | null | [配置项](http://echarts.baidu.com/option.html)
theme | Object/string | default | 主题

## 事件(Events)
名称 | 返回值 | 说明
---|---|---
onBeforeInit | - | 图表初始化前
onAfterInit | - | 图表初始化后
onOptionChange | - | 图表配置项变更

---

# 示例(基于[angular-cli](https://github.com/angular/angular-cli)创建)
- 1、进入到demo目录

```
cd demo
```

- 2、安装依赖

```
npm install
```

- 3、启动服务

```
ng serve
```

- 4、访问 http://localhost:4200/