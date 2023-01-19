<template>
	<div class="theme-setting">
		<el-icon size="22" @click="openDrawer">
			<IconSetting />
		</el-icon>
	</div>
</template>

<script setup lang="ts">
import mittBus from '@/utils/mittBus';
import IconSetting from '~icons/ic/baseline-settings';
const openDrawer = () => {
	mittBus.emit('openThemeDrawer');
};
</script>
<style lang="scss" scoped>
.theme-setting {
	display: flex;
}
</style>
