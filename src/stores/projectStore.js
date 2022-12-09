import { ref } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

//触发器，用于元素切换显示
export const useProjectStore = defineStore("projectStore", () => {
  const projects = ref([
    {
      id: uuidv4(),
      url: "https://github.com/",
      name: "Github",
      description: "GitHub是一个在线软件源代码托管服务平台。",
      leader: "Microsoft",
      state: "进行中",
      percentage: 40,
      type: "",
    },
    {
      id: uuidv4(),
      url: "https://www.w3schools.com/html/",
      name: "HTML",
      description: "HTML是一种用于创建网页的标准标记语言。",
      leader: "W3C",
      state: "已完成",
      percentage: 99,
      type: "success",
    },
    {
      id: uuidv4(),
      url: "https://www.w3schools.com/css/",
      name: "CSS",
      description: "CSS是一种用来为结构化文档添加样式的计算机语言。",
      leader: "W3C",
      state: "已完成",
      percentage: 90,
      type: "warning",
    },
    {
      id: uuidv4(),
      url: "https://www.w3schools.com/js/",
      name: "JavaScript",
      description:
        "JavaScript是一门基于原型和头等函数的多范式高级解释型编程语言。",
      leader: "Brendan Eich",
      state: "进行中",
      percentage: 66,
      type: "",
    },
    {
      id: uuidv4(),
      url: "https://vuejs.org/",
      name: "Vue",
      description: "Vue.js是一个用于创建用户界面的开源MVVM前端JavaScript框架。",
      leader: "尤雨溪",
      state: "进行中",
      percentage: 45,
      type: "",
    },
    {
      id: uuidv4(),
      url: "https://reactjs.org/",
      name: "React",
      description: "React.js是一个自由及开放源代码的前端JavaScript工具库。",
      leader: "Meta",
      state: "未开始",
      percentage: 16,
      type: "exception",
    },
    {
      id: uuidv4(),
      url: "https://uniapp.dcloud.net.cn/",
      name: "uni-app",
      description: "uni-app是一个使用 Vue.js开发所有前端应用的框架。",
      leader: "DCloud",
      state: "未开始",
      percentage: 16,
      type: "exception",
    },
  ]);
  return { projects };
});
