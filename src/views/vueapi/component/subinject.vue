<template>
	<div>
		<h6>因为在默认情况下，父组件的属性会直接渲染在子组件的根节点上</h6>
		祖组件传参----{{ $attrs }}----{{ $attrs.time }}------
		{{ onMsg }}
	</div>
</template>

<script lang="ts" setup>
const onMsg = inject('msg');
</script>
<style lang="scss" scoped></style>
