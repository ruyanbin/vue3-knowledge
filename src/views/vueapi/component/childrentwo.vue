<template>
	<div class="card">
		<div>title----{{ title }}--------<el-button @click="titleClick"> clicktitle</el-button></div>
		<div>str----{{ str }}-----------<el-button @click="strClick"> click--str</el-button></div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	str: {
		type: String,
		required: true,
	},
});
const emits = defineEmits(['update:title', 'update:str']);
const titleClick = () => {
	emits('update:title', 'update-----title');
};
const strClick = () => {
	emits('update:str', 'update-----str');
};
</script>
<style lang="scss" scoped></style>
