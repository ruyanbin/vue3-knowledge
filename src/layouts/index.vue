<template>
	<component v-resize :is="LayoutComponents[themeConfig.layout]" />
	<ThemeDrawer />
	<MenuDrawer />
</template>

<script lang="ts" setup name="layout">
import { computed, onMounted } from 'vue'
import { GlobalStore } from '@/stores'
import ThemeDrawer from './components/ThemeDrawer/index.vue'
import LayoutVertical from './LayoutVertical/index.vue'
import LayoutClassic from './LayoutClassic/index.vue'
import LayoutTransverse from './LayoutTransverse/index.vue'
import LayoutColumns from './LayoutColumns/index.vue'
import MenuDrawer from '@/layouts/components/MenuDrawer/index.vue'
import mittBus, { emitter } from '@/utils/mittBus'
const LayoutComponents: { [key: string]: any } = {
	vertical: LayoutVertical,
	classic: LayoutClassic,
	transverse: LayoutTransverse,
	columns: LayoutColumns,
}

const globalStore = GlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)

// 监听容器
emitter.on('resize', ({ detail }) => {
	const { width } = detail
	if (width <= 900) {
		console.log(2)
		globalStore.setisPhone(true)
		globalStore.setisCollapse(false)
	} else {
		console.log(1)
		globalStore.setisPhone(false)
		globalStore.setisCollapse(false)
		mittBus.emit('isDrawerMenu', false)
	}
})
</script>
<style lang="scss" scoped>
.layout {
	width: 100%;
	height: 100%;
}
.el-drawer__body {
	padding: 0;
}
</style>
