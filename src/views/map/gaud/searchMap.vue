<template>
	<div class="card content-box position-reactive">
		<search v-model="str"></search>
		{{ str }}
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import search from './components/search.vue';
const str: string = ref('111');
</script>
<style lang="less" scoped></style>
