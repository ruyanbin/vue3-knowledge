<template>
	<div class="tool-bar-ri">
		<div class="header-icon">
			<AssemblySize id="assemblySize" />
			<LanguageConfig id="language" />
			<SearchMenu id="searchMenu" />
			<ThemeSetting id="themeSetting" />
			<!-- <Message id="message" />-->
			<FullscreenConfig id="fullscreen" />
		</div>

		<AvatarUser />
	</div>
</template>

<script lang="ts" setup>
import SearchMenu from './components/SearchMenu.vue';
import FullscreenConfig from './components/FullscreenConfig.vue';
// import Message from "./components/Message.vue";
import LanguageConfig from './components/LanguageConfig.vue';
import ThemeSetting from './components/ThemeSetting.vue';
import AssemblySize from './components/AssemblySize.vue';
import AvatarUser from './components/AvatarUser.vue';
</script>
<style scoped lang="scss">
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30px;
	.header-icon {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 230px;
		margin-right: 22px;
	}
	.username {
		margin: 0 20px 0 0;
		font-size: 15px;
	}
}
</style>
