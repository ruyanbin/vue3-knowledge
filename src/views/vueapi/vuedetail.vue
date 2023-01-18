<template>
	<div class="card">
		vue 详情

		<div class="card">query:path接收的参数----{{ route.query }}</div>
		<div class="card">params:path接收的参数----{{ params }}</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const params = reactive({
	params: route.params,
});
onMounted(() => {
	console.log(route, 'route');
});
</script>
<style lang="scss" scoped></style>
