<template>
	<el-table :data="state.data" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all>
		<el-table-column type="selection" width="55" />
		<el-table-column prop="path" label="路径" sortable />
		<el-table-column prop="component" label="component" sortable />
		<el-table-column prop="meta.title" label="name" sortable />
	</el-table>
</template>

<script lang="ts" setup>
import { isProxy, isRef, nextTick, onMounted, reactive, ref, unref } from 'vue'
import { getMenulist } from './api'
const state = reactive({
	data: [],
})
const num = ref(0)
const tableData: any[] = reactive([])
console.log(isRef(tableData), 'tableData')
console.log(isProxy(tableData), 'tableData---reactive')
console.log(unref(tableData), 'tableData---unref')
console.log(unref(num), 'tableData---unref--ref')

const getlist = async () => {
	const res: any = await getMenulist({})

	state.data = res.data.datalist
	console.log(state.data, 'tableData')
}
onMounted(() => {
	nextTick(() => {
		getlist()
	})
})
</script>
<style lang="scss" scoped></style>
