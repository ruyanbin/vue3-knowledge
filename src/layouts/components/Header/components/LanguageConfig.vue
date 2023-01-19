<template>
	<el-dropdown trigger="click" @command="handleSetLanguage">
		<el-icon size="22">
			<IconGtranslate />
		</el-icon>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item :disabled="language && language === 'zh'" command="zh">简体中文</el-dropdown-item>
				<el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import IconGtranslate from '~icons/material-symbols/g-translate';

import { useI18n } from 'vue-i18n';
import { GlobalStore } from '@/stores';
import { getBrowserLang } from '@/utils/util';

const i18n = useI18n();
const globalStore = GlobalStore();
const language = computed((): string => globalStore.language);
// 切换语言
const handleSetLanguage = (lang: string) => {
	i18n.locale.value = lang;
	globalStore.updateLanguage(lang);
};

onMounted(() => {
	handleSetLanguage(language.value || getBrowserLang());
});
</script>
<style lang="scss" scoped></style>
