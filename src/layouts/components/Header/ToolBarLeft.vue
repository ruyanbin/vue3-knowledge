<template>
  <div class="tool-bar-lf">
    <CollapseIcon id="collapseIcon" />
    <Breadcrumb id="breadcrumb" v-if="themeConfig.breadcrumb" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { GlobalStore } from "@/stores";
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/BreadcrumbComponent.vue";
const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>
<style lang="scss" scoped>
.tool-bar-lf {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
