<template>
  <div class="layout-search-dialog">
    <el-icon size="22" @click="handleOpen">
      <fangdajing />
    </el-icon>
    <el-dialog @click="closeSearch" v-model="isShowSearch" width="300px" destroy-on-close :modal="false" fullscreen>
      <!-- :show-close="false" -->
      <el-autocomplete
        v-model="searchMenu"
        ref="menuInputRef"
        placeholder="菜单搜索 ：支持菜单名称、路径"
        :fetch-suggestions="searchMenuList"
        @select="handleClick"
      >
        <template #prefix>
          <el-icon>
            <Search />
          </el-icon>
        </template>
        <template #default="{ item }">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span> {{ item.meta.title }} </span>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { getFlatArr } from "@/utils/util";

import fangdajing from "~icons/ic/twotone-search";

import { Search } from "@element-plus/icons-vue";
import { ElIcon, ElDialog, ElAutocomplete } from "element-plus";
import { computed, ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { AuthStore } from "@/stores/modules/auth";
const router = useRouter();
const authStore = AuthStore();

// 打开搜索菜单
const isShowSearch = ref(false);
const searchMenu = ref("");
const menuList = computed(() => getFlatArr(authStore.authMenuList));
// const searchMenuList = ref([]);
const menuInputRef = ref();
const searchMenuList = (queryString: string, cb: any) => {
  const results = queryString ? menuList.value.filter(filterNodeMethod(queryString)) : menuList.value;
  cb(results);
};
const filterNodeMethod = (queryString: string) => {
  return (restaurant: Menu.MenuOptions) => {
    return (
      restaurant.path.toLowerCase().indexOf(queryString.toLowerCase()) > -1 ||
      restaurant.meta.title.toLowerCase().indexOf(queryString.toLowerCase()) > -1
    );
  };
};
const handleOpen = () => {
  console.log(1234);
  isShowSearch.value = true;
  searchMenu.value = "";
  nextTick(() => {
    console.log(menuInputRef.value, " menuInputRef.value");
    setTimeout(() => {
      menuInputRef.value.focus();
    });
  });
};
const closeSearch = () => {
  isShowSearch.value = false;
};
const handleClick = (menuItem: Menu.MenuOptions) => {
  searchMenu.value = "";
  if (menuItem.meta.isLink) window.open(menuItem.meta.isLink, "_blank");
  else router.push(menuItem.path);
  closeSearch();
};
</script>
<style scoped lang="scss">
/* 菜单搜索样式 */
.layout-search-dialog {
  display: flex;
  :deep(.el-dialog) {
    background: rgb(0 0 0 / 50%);
    border-radius: 0 !important;
    box-shadow: unset !important;
    .el-dialog__header {
      border-bottom: none !important;
    }
  }
  :deep(.el-autocomplete) {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 550px;
    transform: translateX(-50%);
  }
}
.el-autocomplete__popper {
  .el-icon {
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  span {
    margin: 0 0 0 10px;
    font-size: 14px;
  }
}
</style>
