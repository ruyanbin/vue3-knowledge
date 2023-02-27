<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium"> 打字机组件 </span>
			</div>
		</template>
		<TypeIt :values="['test1', 'test2', 'test3']" />
	</el-card>
</template>

<script lang="ts" setup>
import TypeIt from '@/components/ReTypeit'
</script>
<style lang="scss" scoped></style>
