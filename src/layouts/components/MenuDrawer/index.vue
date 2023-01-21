<template>
	<el-drawer
		v-model="isDrawer"
		style="padding: 0"
		class="drawerMenu"
		:direction="direction"
		:size="'210px'"
		:before-close="handleClose"
	>
		<template #header>
			<div class="logo flx-justify-around">
				<img src="@/assets/images/logo.png" alt="logo" />
				<span>{{ title }}</span>
			</div>
		</template>

		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				:router="false"
				:collapse="isCollapse"
				:collapse-transition="false"
				:unique-opened="true"
				background-color="#191a20"
				text-color="#bdbdc0"
				active-text-color="#ffffff"
			>
				<SubMenu :menuList="menuList" />
			</el-menu>
		</el-scrollbar>
	</el-drawer>
</template>

<script lang="ts" setup>
import SubMenu from '@/layouts/components/Menu/SubMenu.vue';
import mittBus from '@/utils/mittBus';
import { useRoute } from 'vue-router';
import { GlobalStore } from '@/stores';
import { AuthStore } from '@/stores/modules/auth';
import { computed, ref } from 'vue';
const globalStore = GlobalStore();
const route = useRoute();
const authStore = AuthStore();
const title = computed(() => globalStore.title);
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);
// const isPhone = computed(() => globalStore.themeConfig.isPhone);
const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
const direction = ref('ltr');
const isDrawer = ref<Boolean>(false);
mittBus.on('isDrawerMenu', (all) => {
	isDrawer.value = all as boolean;
});
const handleClose = () => {
	isDrawer.value = false;
};
</script>
<style lang="scss" scoped>
.logo {
	img {
		width: 1rem;
		height: 1rem;
	}
	color: #fff;
}
</style>
