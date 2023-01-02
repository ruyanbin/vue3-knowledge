<template>
  <component :is="LayoutComponents[themeConfig.layout]" />
  <ThemeDrawer />
</template>

<script lang="ts" setup name="layout">
import { computed } from "vue";
import { GlobalStore } from "@/stores";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutTransverse from "./LayoutTransverse/index.vue";
import LayoutColumns from "./LayoutColumns/index.vue";
const LayoutComponents: { [key: string]: any } = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutTransverse,
  columns: LayoutColumns,
};

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>
<style lang="scss" scoped>
.layout {
  min-width: 740px;
}
</style>
