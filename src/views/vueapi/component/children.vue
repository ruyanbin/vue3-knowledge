<template>
	<div class="card">
		<div>1.通过emit</div>
		<el-button @click="childrenP('2')"> click 子传父</el-button>
		<div>2.通过函数</div>
		<el-button @click="childrenP2(3)"> click 子传父</el-button>
		<div>子孙组件</div>
		<subinject v-bind="$attrs"></subinject>
	</div>
</template>

<script lang="ts" setup>
import subinject from './subinject.vue'

const props = defineProps({
	carr: {
		type: Function,
		required: true,
	},
})
const emits = defineEmits(['numclick'])
const childrenP = (val: string) => {
	emits('numclick', val)
}
const childrenP2 = (val: number) => {
	console.log('子组件函数')
	props.carr(val)
}
</script>
<style lang="scss" scoped></style>
