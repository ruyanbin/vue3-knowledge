import { App } from 'vue';
import auth from './modules/auth';
import copy from './modules/copy';
import waterMarker from './modules/waterMarker';
import draggable from './modules/draggable';
import debounce from './modules/debounce';
import throttle from './modules/throttle';
import { resize } from './modules/resize';
const directivesList: any = {
	// Custom directives
	auth,
	copy,
	waterMarker,
	draggable,
	debounce,
	throttle,
	resize,
};

const directives = {
	install: function (app: App<Element>) {
		Object.keys(directivesList).forEach((key) => {
			// 注册所有自定义指令
			app.directive(key, directivesList[key]);
		});
	},
};

export default directives;
