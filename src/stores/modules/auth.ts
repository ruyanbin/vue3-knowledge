import { defineStore } from "pinia";
import { AuthState } from "@/stores/interface";
import {
  getKeepAliveRouterName,
  getShowMenuList,
  getAllBreadcrumbList,
} from "@/utils/util";
import piniaPersistConfig from "@/config/piniaPersist";
// AuthStore
export const AuthStore = defineStore({
  id: "AuthState",
  state: (): AuthState => ({
    // 按钮权限列表
    authButtonList: {},
    // menuList 作为动态路由，不会做持久化存储
    authMenuList: [
      {
        component: "/home/index",
        name: "home",
        path: "/home/index",
        meta: {
          icon: "HomeFilled",
          isAffix: true,
          isFull: false,
          isHide: false,
          isKeepAlive: true,
          isLink: "",
          title: "首页",
        },
      },
      {
        name: "proTable",
        path: "/proTable",
        meta: {
          icon: "MessageBox",
          isAffix: false,
          isFull: false,
          isHide: false,
          isKeepAlive: true,
          isLink: "",
          title: "超级表格",
        },
        children: [
          {
            name: "useTreeFilter",
            component: "/proTable/useTreeFilter/index",
            path: "/proTable/useTreeFilter/index",
            meta: {
              icon: "Menu",
              isAffix: false,
              isFull: false,
              isHide: false,
              isKeepAlive: true,
              isLink: "",
              title: "使用 TreeFilter",
            },
          },
        ],
      },
      {
        name: "sys",
        path: "/sys",
        meta: {
          icon: "MessageBox",
          isAffix: false,
          isFull: false,
          isHide: false,
          isKeepAlive: true,
          isLink: "",
          title: "系统管理",
        },
        children: [
          {
            name: "Account",
            component: "/sys/Account/index",
            path: "/sys/Account/index",
            meta: {
              icon: "Menu",
              isAffix: false,
              isFull: false,
              isHide: false,
              isKeepAlive: true,
              isLink: "",
              title: "账号管理",
            },
          },
          {
            name: "Role",
            component: "/sys/Role/index",
            path: "/sys/Role/index",
            meta: {
              icon: "Menu",
              isAffix: false,
              isFull: false,
              isHide: false,
              isKeepAlive: true,
              isLink: "",
              title: "角色管理",
            },
          },
          {
            name: "Menu",
            component: "/sys/Menu/index",
            path: "/sys/Menu/index",
            meta: {
              icon: "Menu",
              isAffix: false,
              isFull: false,
              isHide: false,
              isKeepAlive: true,
              isLink: "",
              title: "菜单管理",
            },
          },
        ],
      },
    ],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: "",
  }),
  getters: {
    // 按钮权限列表
    authButtonListGet: (state) => state.authButtonList,
    // 后端返回的菜单列表
    authMenuListGet: (state) => state.authMenuList,
    // 后端返回的菜单列表 ==> 左侧菜单栏渲染，需要去除 isHide == true
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),
    // 扁平化成一维数组后的菜单列表 ==> 用来添加动态路由
    // flatMenuListGet: state => getFlatArr(state.authMenuList),
    // 面包屑导航列表
    breadcrumbListGet: (state) => getAllBreadcrumbList(state.authMenuList),
    // 需要缓存的菜单 name，用作页面 keepAlive
    keepAliveRouterGet: (state) => getKeepAliveRouterName(state.authMenuList),
  },
  actions: {
    // getAuthButtonList
    async getAuthButtonList() {
      //   const { data } = await getAuthButtonListApi();
      //   this.authButtonList = data;
    },
    // getAuthMenuList
    async getAuthMenuList() {
      //   const { data } = await getAuthMenuListApi();
      //   this.authMenuList = data;
    },
    // setRouteName
    async setRouteName(name: string) {
      this.routeName = name;
    },
  },
  persist: piniaPersistConfig("AuthState", ["authButtonList", "routeName"]),
});
