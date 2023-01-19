import { RouteRecordRaw } from 'vue-router';
import { HOME_URL, LOGIN_URL } from '@/config/config';
export const globalRouter: RouteRecordRaw[] = [
	{
		path: '/layout',
		name: 'layout',
		component: () => import('@/layouts/index.vue'),
		// component: () => import("@/layouts/indexAsync.vue"),
		redirect: HOME_URL,
		children: [
			// {
			//   path: "/home/index",
			//   name: "Home",
			//   component: () => import("@/views/Home/index.vue"),
			//   meta: {
			//     title: "首页",
			//     icon: "HomeFilled",
			//   },
			// },
			{
				path: '/sys/Account/index',
				name: 'Account',
				component: () => import('@/views/sys/Account/index.vue'),
				meta: {
					title: '账号管理',
					icon: 'Menu',
				},
			},
			{
				path: '/sys/Role/index',
				name: 'Role',
				component: () => import('@/views/sys/Role/index.vue'),
				meta: {
					title: '角色管理',
					icon: 'Menu',
				},
			},
			{
				path: '/sys/Menu/index',
				name: 'Menu',
				component: () => import('@/views/sys/Menu/index.vue'),
				meta: {
					title: '菜单管理',
					icon: 'Menu',
				},
			},
			{
				path: '/proTable/useTreeFilter/index',
				name: 'useTreeFilter',
				component: () => import('@/views/proTable/useTreeFilter/index.vue'),
				meta: {
					title: '使用 TreeFilter',
					icon: 'Menu',
				},
			},
		],
	},
];
