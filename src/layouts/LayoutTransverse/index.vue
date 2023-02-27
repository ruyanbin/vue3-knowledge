<template>
	<el-container class="layout">
		<el-header>
			<div class="logo flx-center">
				<img src="@/assets/images/logo.png" alt="logo" />
				<span>{{ title }}</span>
			</div>
			<el-menu
				v-if="!isPhone"
				mode="horizontal"
				:default-active="activeMenu"
				:router="false"
				:unique-opened="true"
				background-color="#191a20"
				text-color="#dadada"
				active-text-color="#ffffff"
			>
				<!-- 只有在这里写 submenu 才能触发 menu 三个点省略 -->
				<template v-for="subItem in menuList" :key="subItem.path">
					<el-sub-menu v-if="subItem.children?.length" :index="subItem.path" :key="subItem.path + 'el-sub-menu'">
						<template #title>
							<el-icon>
								<component :is="subItem.meta.icon"></component>
							</el-icon>
							<span>{{ subItem.meta.title }}</span>
						</template>
						<SubMenu :menuList="subItem.children" />
					</el-sub-menu>
					<el-menu-item v-else :index="subItem.path" :key="subItem.path + 'el-menu-item'" @click="handleClickMenu(subItem)">
						<el-icon>
							<component :is="subItem.meta.icon"></component>
						</el-icon>
						<template #title>
							<span>{{ subItem.meta.title }}</span>
						</template>
					</el-menu-item>
				</template>
			</el-menu>
			<ToolBarRight class="ToolBarRightClass" />
		</el-header>
		<Main />
	</el-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { GlobalStore } from '@/stores'
import { AuthStore } from '@/stores/modules/auth'
import Main from '@/layouts/components/Main/index.vue'
import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
import SubMenu from '@/layouts/components/Menu/SubMenu.vue'
const route = useRoute()
const router = useRouter()

const authStore = AuthStore()
const globalStore = GlobalStore()
const activeMenu = computed(() => route.path)
const menuList = computed(() => authStore.showMenuListGet)
const isCollapse = computed(() => globalStore.themeConfig.isCollapse)
const title = computed(() => globalStore.title)
const isPhone = computed(() => globalStore.themeConfig.isPhone)
const handleClickMenu = (subItem: Menu.MenuOptions) => {
	if (subItem.meta.isLink) return window.open(subItem.meta.isLink, '_blank')
	router.push(subItem.path)
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
<style lang="scss" scoped>
.ToolBarRightClass {
	color: #fff;
	.el-icon {
		color: #fff;
	}
}
</style>
