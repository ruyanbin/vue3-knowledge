<template>
	<el-icon class="collapse-icon" @click="collapse">
		<!-- 不是手机 -->
		<component v-if="!isPhone" :is="themeConfig.isCollapse ? 'expand' : 'fold'"></component>
		<!-- 手机 -->
		<component v-else :is="isDrawer ? 'expand' : 'fold'"></component>
	</el-icon>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { GlobalStore } from '@/stores';
import mittBus from '@/utils/mittBus';
const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
const isPhone = computed(() => globalStore.themeConfig.isPhone);
const isDrawer = ref(false);
const collapse = () => {
	if (isPhone.value) {
		mittBus.emit('isDrawerMenu', true);
	} else {
		globalStore.setThemeConfig({
			...themeConfig.value,
			isCollapse: !themeConfig.value.isCollapse,
		});
	}
};
</script>
<style scoped lang="scss">
.collapse-icon {
	margin-right: 20px;
	font-size: 22px;
	cursor: pointer;
}
</style>
