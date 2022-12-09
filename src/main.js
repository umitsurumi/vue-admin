import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import * as echarts from "echarts";
import "./assets/main.css";
import ConfirmBox from "./components/ConfirmBox.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.echarts = echarts;
app.component("ConfirmBox", ConfirmBox);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
