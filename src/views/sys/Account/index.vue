<template>
	<div class="table-box">
		<ProTable
			ref="proTable"
			title="用户列表"
			:columns="columns"
			:requestApi="getTableList"
			:initParam="initParam"
			:dataCallback="dataCallback"
		>
			<!-- 表格 header 按钮 -->
			<template #tableHeader>
				<el-button type="primary" :icon="CirclePlus" @click="openDialog('新增')">新增用户</el-button>
			</template>
			<!-- Expand -->
			<template #expand="scope">
				{{ scope.row }}
			</template>
			<!-- usernameHeader -->
			<template #usernameHeader="scope">
				<el-button type="primary" @click="ElMessage.success('我是通过作用域插槽渲染的表头')">
					{{ scope.row.label }}
				</el-button>
			</template>
			<!-- createTime -->
			<template #createTime="scope">
				<el-button type="primary" link @click="ElMessage.success('我是通过作用域插槽渲染的内容')">
					{{ scope.row.createTime }}
				</el-button>
			</template>
			<!-- 表格操作 -->
			<template #operation="scope">
				<el-button type="primary" link :icon="View" @click="openDialog('查看', scope.row)">查看</el-button>
				<el-button type="primary" link :icon="EditPen" @click="openDialog('编辑', scope.row)">编辑</el-button>

				<el-button type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">删除</el-button>
			</template>
		</ProTable>
		<DetailDialog ref="DetailDialogRef" />
		<!-- <UserDrawer ref="drawerRef" />
		<ImportExcel ref="dialogRef" /> -->
	</div>
</template>

<script setup lang="tsx">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { User } from '@/api/interface'
import { ColumnProps } from '@/components/ProTable/interface'
import { useHandleData } from '@/hooks/useHandleData'
import { useDownload } from '@/hooks/useDownload'
import { useAuthButtons } from '@/hooks/useAuthButtons'
import ProTable from '@/components/ProTable/index.vue'
import DetailDialog from './detailDialog.vue'
import { CirclePlus, Delete, EditPen, Download, Upload, View, Refresh } from '@element-plus/icons-vue'
import { getUserList, deleteUser, editUser, addUser } from '@/api/modules/user'

// 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
const proTable = ref()

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

// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getUserList"
const getTableList = (params: any) => {
	console.log(params, 'params')
	let newParams = { ...params }
	// newParams.username && (newParams.username = "custom-" + newParams.username);
	return getUserList(newParams)
}

// 页面按钮权限（按钮权限既可以使用 hooks，也可以直接使用 v-auth 指令，指令适合直接绑定在按钮上，hooks 适合根据按钮权限显示不同的内容）
const { BUTTONS } = useAuthButtons()

// 自定义渲染表头（使用tsx语法）
const headerRender = (row: ColumnProps) => {
	return (
		<el-button
			type="primary"
			onClick={() => {
				ElMessage.success('我是通过 tsx 语法渲染的表头')
			}}
		>
			{row.label}
		</el-button>
	)
}

// 表格配置项
const columns: ColumnProps[] = [
	{ type: 'selection', fixed: 'left', width: 80 },
	{ type: 'index', label: '#', width: 80 },
	// { type: "expand", label: "Expand", width: 100 },
	{
		prop: 'account',
		label: '账号',
		search: { el: 'input' },
		render: (scope) => {
			return scope.row.account
		},
	},
	{
		prop: 'username',
		label: '用户姓名',
		search: { el: 'input' },
		render: (scope) => {
			return scope.row.username
		},
	},
	{
		prop: 'gender',
		label: '性别',
		enum: [
			{ label: '男', value: '1' },
			{ label: '女', value: '2' },
		],
		fieldNames: { label: 'label', value: 'value' },
		search: { el: 'select' },
	},
	// 多级 prop
	// { prop: "user.detail.age", label: "年龄", search: { el: "input" } },
	{ prop: 'idCard', label: '身份证号', search: { el: 'input' } },
	{ prop: 'email', label: '邮箱' },
	{ prop: 'address', label: '居住地址' },
	{
		prop: 'status',
		label: '用户状态',
		enum: [
			{ label: '启用', value: 1 },
			{ label: '禁用', value: 0 },
		],
		fieldNames: { label: 'label', value: 'label' },

		render: (scope: { row: User.ResUserList }) => {
			return (
				<>
					{BUTTONS.value.status ? (
						<el-switch
							model-value={scope.row.status}
							active-text={scope.row.status ? '启用' : '禁用'}
							active-value={1}
							inactive-value={0}
							onClick={() => changeStatus(scope.row)}
						/>
					) : (
						<el-tag type={scope.row.status ? 'success' : 'danger'}>{scope.row.status ? '启用' : '禁用'}</el-tag>
					)}
				</>
			)
		},
	},
	{
		prop: 'createTime',
		label: '创建时间',
		headerRender,
		width: 200,
		search: {
			el: 'date-picker',
			span: 2,
			defaultValue: ['2022-11-12 11:35:00', '2022-12-12 11:35:00'],
			props: { type: 'datetimerange' },
		},
	},
	{ prop: 'operation', label: '操作', fixed: 'right', width: 330 },
]

// 删除用户信息
const deleteAccount = async (params: User.ResUserList) => {
	await useHandleData(deleteUser, { id: [params.id] }, `删除【${params.username}】用户`)
	proTable.value.getTableList()
}

// 批量删除用户信息
const batchDelete = async (id: string[]) => {
	await useHandleData(deleteUser, { id }, '删除所选用户信息')
	proTable.value.clearSelection()
	proTable.value.getTableList()
}

// 切换用户状态
const changeStatus = async (row: User.ResUserList) => {
	// await useHandleData(
	//   // changeUserStatus,
	//   { id: row.id, status: row.status == 1 ? 0 : 1 },
	//   `切换【${row.username}】用户状态`
	// );
	proTable.value.getTableList()
}
// 新增
const DetailDialogRef = ref()
const openDialog = (title: string, rowData: Partial<User.ResUserList> = {}) => {
	let params = {
		title,
		isView: title === '查看',
		rowData: { ...rowData },
		api: title === '新增' ? addUser : title === '编辑' ? addUser : '',
		getTableList: proTable.value.getTableList,
	}
	DetailDialogRef.value.acceptParams(params)
}
</script>
