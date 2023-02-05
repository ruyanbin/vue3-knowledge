/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
declare module '@vuemap/vue-amap';
declare module 'element-resize-detector';
declare module '@jiaminghi/data-view';
declare module '@types/three';
// 使用markdown
declare module '@kangc/v-md-editor';
declare module '@kangc/v-md-editor/lib/theme/github.js';
declare module '@kangc/v-md-editor/lib/theme/vuepress.js';
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index';
declare module 'prismjs';

declare module '*.vue' {
	import type { CSSProperties } from 'vue';
	interface CSSProperties {
		[key: `--${string}`]: string;
	}
}
