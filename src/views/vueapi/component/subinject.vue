<template>
	<div>
		<h6>因为在默认情况下，父组件的属性会直接渲染在子组件的根节点上</h6>
		祖组件传参----{{ $attrs }}----{{ $attrs.time }}------
		{{ onMsg }}
		<el-button @click="attrClick">attrs 事件</el-button>
	</div>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
const attrs = useAttrs();
const attrClick = () => {
	attrs.onAclick();
};

const onMsg = inject('msg');
</script>
<style lang="scss" scoped></style>
