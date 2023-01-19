<template>
	<div>home</div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { loginApi } from '@/api/modules/dome';
const getDate = async () => {
	const { data } = await loginApi();
	console.log(data);
};

onMounted(() => {
	getDate();
});
</script>
