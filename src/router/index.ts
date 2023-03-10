import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { GlobalStore } from '@/stores'
import { AuthStore } from '@/stores/modules/auth'
import { LOGIN_URL } from '@/config/config'
import { getFlatArr } from '@/utils/util'
import { staticRouter, errorRouter } from '@/router/modules/staticRouter'
import { globalRouter } from '@/router/modules/globalRouter'
import { initDynamicRouter } from '@/router/modules/dynamicRouter'
import NProgress from '@/config/nprogress'
import CancelToken from '@/api/CancelToken'
import { removeWatermark, setWaterMark } from '@/utils/watermark'

/**
 * @description 动态路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */
const routes: RouteRecordRaw[] = [
	...staticRouter,
	...errorRouter,
	// ...globalRouter,
]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 }),
})
/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	// 路由跳转要清除之前所有的请求缓存
	CancelToken.clearPending()
	// 1.NProgress 开始
	NProgress.start()

	// 2.如果是访问登陆页，直接放行
	if (to.path === LOGIN_URL) return next()

	// 3.判断是否有 Token，没有重定向到 login
	const globalStore = GlobalStore()
	if (!globalStore.token) return next({ path: LOGIN_URL, replace: true })

	// // 4.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	const authStore = AuthStore()
	authStore.setRouteName(to.name as string)
	if (!authStore.authMenuListGet.length) {
		await initDynamicRouter()
		return next({ ...to, replace: true })
	}
	// 是否添加水印
	if (globalStore.isWatermark) {
		if (to.path === LOGIN_URL) {
			removeWatermark()
		} else {
			setWaterMark('hahaha', '哈哈哈')
		}
	}

	// 5.正常访问页面
	next()
})
/**
 * @description 重置路由
 * */
export const resetRouter = () => {
	const authStore = AuthStore()
	const dynamicRouter = getFlatArr(JSON.parse(JSON.stringify(authStore.authMenuListGet)))
	dynamicRouter.forEach((route) => {
		const { name } = route
		if (name && router.hasRoute(name)) router.removeRoute(name)
	})
}
/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done()
})

/**
 * @description 路由跳转错误
 * */
router.onError((error) => {
	NProgress.done()
	console.warn('路由错误', error.message)
})
export default router
