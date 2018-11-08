import { Component } from "@angular/core";

@Component({
  selector: "group-charts",
  templateUrl: "./group.component.html"
})
export class GroupComponent {
  option = {
    title: {
      text: "某站点用户访问来源",
      subtext: "纯属虚构",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
    },
    calculable: true,
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", 225],
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ]
      }
    ]
  };

  option2 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
    },
    toolbox: {
      show: true,
      orient: "vertical",
      y: "center",
      feature: {
        mark: { show: true },
        magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      }
    ],
    yAxis: [
      {
        type: "value",
        splitArea: { show: true }
      }
    ],
    grid: {
      x2: 40
    },
    series: [
      {
        name: "直接访问",
        type: "bar",
        stack: "总量",
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: "邮件营销",
        type: "bar",
        stack: "总量",
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: "联盟广告",
        type: "bar",
        stack: "总量",
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: "视频广告",
        type: "bar",
        stack: "总量",
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: "搜索引擎",
        type: "bar",
        stack: "总量",
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  group = "group1";
  group2 = "group1";

  toggleGroup() {
    if (this.group2) {
      this.group2 = null;
    } else {
      this.group2 = "group1";
    }
  }
}
