/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
declare module '@vuemap/vue-amap';
declare module 'element-resize-detector';
declare module '*.vue' {
	import type { CSSProperties } from 'vue';
	interface CSSProperties {
		[key: `--${string}`]: string;
	}
}
