import router from "@/router/index";
import { isType } from "@/utils/util";
import { LOGIN_URL } from "@/config/config";
import { ElNotification } from "element-plus";
import { GlobalStore } from "@/stores";
import { AuthStore } from "@/stores/modules/auth";
import { notFoundRouter } from "@/router/modules/staticRouter";
const contextInfo = require.context("@/views", true, /.vue$/);
const routerAry: { path: string; component: any }[] = [];
contextInfo.keys().forEach(fileName => {
  const pathConfig = contextInfo(fileName);
  const path = "/" + fileName.substring(2, fileName.length - 4);
  routerAry[path] = pathConfig.default;
});
/**
 * 初始化动态路由
 */
export const initDynamicRouter = async () => {
  const authStore = AuthStore();
  const globalStore = GlobalStore();
  try {
    // 1.获取菜单列表 && 按钮权限（可合并到一个接口获取，根据后端不同可自行改造）
    await authStore.getAuthMenuList();
    // 2.判断当前用户有没有菜单权限
    if (!authStore.authMenuListGet.length) {
      ElNotification({
        title: "无权限访问",
        message: "当前账号无任何菜单权限，请联系系统管理员！",
        type: "warning",
        duration: 3000
      });
      globalStore.setToken("");
      router.replace(LOGIN_URL);
      return Promise.reject("No permission");
    }

    // 3.添加动态路由
    authStore.flatMenuListGet.forEach((item: any) => {
      item.children && delete item.children;

      if (item.component && isType(item.component) == "string") {
        // console.log(item, "item");
        item.component = routerAry[item.component];
      }
      if (item.meta.isFull) {
        // 是否添加到左侧菜单
        router.addRoute(item);
      } else {
        // 添加到左侧菜单
        router.addRoute("layout", item);
      }
    });
    console.log(router, "router");
    // 4.最后添加 notFoundRouter
    router.addRoute(notFoundRouter);
  } catch (error) {
    // 💢 当按钮 || 菜单请求出错时，重定向到登陆页
    globalStore.setToken("");
    router.replace(LOGIN_URL);
    return Promise.reject(error);
  }
};
