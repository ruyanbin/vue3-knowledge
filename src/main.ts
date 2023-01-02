import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import pinia from "@/stores";
import "@/assets/style/global.scss";
import "@/assets/style/common.scss";
// import "element-plus/dist/index.css";
// vue i18n
import I18n from "@/language/index"; // 国际化
import * as ElIconModules from "@element-plus/icons-vue";
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/assets/style/theme/element-dark.scss";

// mock
// import "./mock/index";
import "./mock/index";

const app = createApp(App);
app.use(router);
app.use(pinia);
// app.use(mock);

app.use(I18n);
// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
}
app.mount("#app");
