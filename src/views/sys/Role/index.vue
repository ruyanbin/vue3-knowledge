<template>
	<div class="table-box">
		<ProTable
			ref="proTable"
			title="角色列表"
			:columns="columns"
			:requestApi="getTableList"
			:initParam="initParam"
			:dataCallback="dataCallback"
		>
		</ProTable>
	</div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import ProTable from '@/components/ProTable/index.vue'
import { ColumnProps } from '@/components/ProTable/interface'
import { getUserList } from '@/api/modules/user'
// 表格配置项
const columns: ColumnProps[] = [
	{ type: 'selection', fixed: 'left', width: 80 },
	{ type: 'index', label: '序号', width: 80 },
	{
		prop: 'username',
		label: '角色',
		search: { el: 'input' },
	},
	{
		prop: 'gender',
		label: '性别',
		enum: [
			{ label: '男', value: 1 },
			{ label: '女', value: 2 },
		],
		fieldNames: { label: 'label', value: 'value' },
		search: { el: 'select' },
	},
]
const getTableList = (params: any) => {
	let newParams = JSON.parse(JSON.stringify(params))
	// newParams.username && (newParams.username = "custom-" + newParams.username);
	return getUserList(newParams)
}
// 如果表格需要初始化请求参数，直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上，改变此参数会自动刷新表格数据)
const initParam = reactive({
	type: 1,
})
// dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 datalist && total && pageNum && pageSize 这些字段，那么你可以在这里进行处理成这些字段
const dataCallback = (data: any) => {
	return {
		datalist: data.datalist,
		total: data.total,
		pageNum: data.pageNum,
		pageSize: data.pageSize,
	}
}
</script>
<style lang="scss" scoped></style>
