<template>
	<div class="card">
		<el-card class="box-card">
			<template #header>
				<div class="card-header">
					<span>无缝滚动组件</span>
					<el-button class="button" text>Operation button</el-button>
				</div>
			</template>
			<ReSeamlessScroll />
		</el-card>
	</div>
</template>

<script lang="ts" setup>
import ReSeamlessScroll from '@/components/SeamlessScroll';
</script>
<style lang="scss" scoped></style>
