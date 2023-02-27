import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import pinia from '@/stores';

// vue i18n
import I18n from '@/language/index'; // 国际化
//
import ElementPlus from 'element-plus';
// element css
import 'element-plus/dist/index.css';
import * as ElIconModules from '@element-plus/icons-vue';
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/assets/style/theme/element-dark.scss';
// custom element css
import '@/assets/style/element.scss';
import '@/assets/style/global.scss';
import '@/assets/style/common.scss';
import '@/assets/style/vuestyle.scss';
//
// import dataV from '@jiaminghi/data-view';
// mock
import '../mock/index';
// custom directives
import directives from '@/directives/index';
// 引入图表（所有图标见 icon 目录下的 demo_index.html）
import './assets/icon/iconfont.css';
// 可视化数据大图
import '@/views/Visualization/style/style.scss';
//引入markdown
import plugins from '@/plugins/main/index';

const app = createApp(App);
app.use(router);
app.use(pinia);
// app.use(dataV);
app.use(directives);
app.use(ElementPlus);
app.use(plugins);

app.use(I18n);
// 统一注册Icon图标
for (const iconName in ElIconModules) {
	if (Reflect.has(ElIconModules, iconName)) {
		const item = ElIconModules[iconName];
		app.component(iconName, item);
	}
}
app.mount('#app');
