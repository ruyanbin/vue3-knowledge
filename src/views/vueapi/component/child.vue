<template>
	<div class="card">
		<div>通过 props 接受----{{ num }}</div>
		<div>
			通过 v-model 接受----{{ modelValue }}----
			<el-button @click="editProps">model</el-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	num: Number,
	modelValue: {
		type: String,
		required: true,
	},
})
const emits = defineEmits(['update:modelValue'])
const editProps = () => {
	console.log('向上冒泡')
	emits('update:modelValue', '22222')
}
</script>
<style lang="scss" scoped></style>
