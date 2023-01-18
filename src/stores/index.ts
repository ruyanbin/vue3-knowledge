import { defineStore, createPinia } from 'pinia';
import { GlobalState, ThemeConfigProps } from './interface';
import { DEFAULT_PRIMARY } from '@/config/config';
import piniaPersistConfig from '@/config/piniaPersist';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { removeWatermark, setWaterMark } from '@/utils/watermark';
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: 'GlobalState',
	// state
	state: (): GlobalState => ({
		title: 'vue3-admin',
		// 是否开启水印
		isWatermark: false,
		Watermark: '水印',
		// token
		token: '',
		// userInfo
		userInfo: '',
		// element组件大小
		assemblySize: 'default',
		// language
		language: '',
		// themeConfig
		themeConfig: {
			// 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
			layout: 'vertical',
			// 默认 primary 主题颜色
			primary: DEFAULT_PRIMARY,
			// 深色模式
			isDark: false,
			// 灰色模式
			isGrey: false,
			// 色弱模式
			isWeak: false,
			// 折叠菜单
			isCollapse: false,
			// 面包屑导航
			breadcrumb: true,
			// 面包屑导航图标
			breadcrumbIcon: true,
			// 标签页
			tabs: true,
			// 标签页图标
			tabsIcon: true,
			// 页脚
			footer: true,
			// 当前页面是否全屏
			maximize: false,
			// 当前设备是否为手机
			isPhone: false,
		},
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token: string) {
			this.token = token;
		},
		// setUserInfo
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo;
		},
		// 更新 isWatermark
		setisWatermark(isWatermark: boolean) {
			this.isWatermark = isWatermark;
			if (this.isWatermark) {
				setWaterMark(this.Watermark, this.Watermark);
			} else {
				removeWatermark();
			}
		},
		// setAssemblySizeSize
		setAssemblySizeSize(assemblySize: string) {
			this.assemblySize = assemblySize;
		},
		// updateLanguage
		updateLanguage(language: string) {
			this.language = language;
		},
		// setThemeConfig
		setThemeConfig(themeConfig: ThemeConfigProps) {
			this.themeConfig = themeConfig;
		},
		setisPhone(isPhone: boolean) {
			this.themeConfig.isPhone = isPhone;
		},
		setisCollapse(isCollapse: boolean) {
			this.themeConfig.isCollapse = isCollapse;
		},
	},
	persist: piniaPersistConfig('GlobalState'),
});
// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
