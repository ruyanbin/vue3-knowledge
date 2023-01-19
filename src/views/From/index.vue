<template>
	<ProFrom ref="proFromRef" :columns="columns"></ProFrom>
</template>

<script lang="ts" setup>
import ProFrom from '@/components/ProFrom/index.vue';
import { onMounted, reactive, ref } from 'vue';
const proFromRef = ref();
const columns = reactive([
	{
		formItem: {
			label: '用户名',
			prop: 'username',
			labelWidth: '80px',
			required: true,
		},
		attrs: {
			typeName: 'input',
			clearable: true,
			placeholder: '请输入用户名',
			disabled: true,
		},
	},
	{
		formItem: {
			label: '密码',
			prop: 'password',
			class: 'data',
		},
		attrs: {
			typeName: 'input',
			clearable: true,
			autofocus: true,
			placeholder: '请输入密码',
			type: 'password',
		},
	},
	{
		formItem: {
			label: '邮箱',
			prop: 'email',
		},
		attrs: {
			typeName: 'input',
			placeholder: '请输入邮箱',
			clearable: true,
			style: 'width:500px',
		},
	},
]);
const form = reactive({
	inline: false,
	labelPosition: 'right',
	labelWidth: '80px',
	size: 'default',
	disabled: false,
	labelSuffix: ' :',
});
const init = () => {
	let params = {
		form,
		columns,
	};
	proFromRef.value.acceptParams(params);
};
onMounted(() => {
	init();
});
</script>
<style lang="scss" scoped></style>
