<template>
  <div class="flex justify-around flex-wrap p-4">
    <div id="myBarChart" class="chart-box"></div>
    <div id="myLineChart" class="chart-box"></div>
    <div id="myRadarChart" class="chart-box"></div>
    <div id="myPieChart" class="chart-box"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts/core";

const initBar = () => {
  const bar = echarts.init(document.getElementById("myBarChart"));
  bar.setOption({
    title: {
      text: "直方图",
    },
    tooltip: {},
    legend: {
      data: ["任务数量"],
    },
    xAxis: {
      data: ["html", "css", "javascript", "vue", "react"],
    },
    yAxis: {},
    series: [
      {
        name: "任务数量",
        type: "bar",
        data: [15, 20, 36, 20, 12],
      },
    ],
  });
};

const initLine = () => {
  const line = echarts.init(document.getElementById("myLineChart"));
  line.setOption({
    title: {
      text: "折线图",
    },
    tooltip: {},
    xAxis: {
      data: ["html", "css", "javascript", "vue", "React"],
    },
    yAxis: {},
    series: [
      {
        name: "任务数量",
        data: [10, 22, 49, 43, 10],
        type: "line",
        stack: "x",
      },
      {
        name: "增加数量",
        data: [5, 4, 3, 5, 10],
        type: "line",
        stack: "x",
      },
    ],
  });
};

const initRadar = () => {
  const radar = echarts.init(document.getElementById("myRadarChart"));
  radar.setOption({
    title: {
      text: "雷达图",
    },
    tooltip: {
      trigger: "axis",
    },

    legend: {
      data: ["A项目", "B项目"],
      x: "right",
      y: "top",
    },

    radar: {
      // shape: 'circle',
      indicator: [
        { name: "html", max: 6500 },
        { name: "css", max: 16000 },
        { name: "javascript", max: 30000 },
        { name: "vue", max: 38000 },
        { name: "react", max: 10000 },
      ],
    },

    series: [
      {
        name: "AB项目雷达图",
        type: "radar",
        tooltip: {
          trigger: "item",
        },
        areaStyle: {},
        color: ["#000", "#ee6666"],
        data: [
          {
            value: [4200, 3000, 20000, 35000, 5000],
            name: "A项目",
          },
          {
            value: [5000, 14000, 28000, 26000, 4000],
            name: "B项目",
          },
        ],
      },
    ],
  });
};

const initPie = () => {
  const pie = echarts.init(document.getElementById("myPieChart"));
  pie.setOption({
    title: {
      text: "饼图",
    },
    legend: {
      orient: "vertical",
      x: "right",
      y: "top",
      data: ["html", "css", "javascript", "vue", "react"],
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "80%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        data: [
          { value: 335, name: "html" },
          { value: 310, name: "css" },
          { value: 844, name: "javascript" },
          { value: 635, name: "vue" },
          { value: 154, name: "react" },
        ],
      },
    ],
  });
};

onMounted(() => {
  initBar();
  initLine();
  initRadar();
  initPie();
});
</script>

<style lang="css" scoped>
.chart-box {
  @apply w-2/5 h-80 mb-10 shadow-lg p-4;
}
</style>
