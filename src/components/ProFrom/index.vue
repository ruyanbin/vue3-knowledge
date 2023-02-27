<template>
	<div class="card content-box">
		<el-alert
			title="通过 component :is 组件属性 && v-bind 属性透传，可以将 template 中的 html 代码全部改变为 columns 配置项，具体配置请看代码。"
			type="warning"
			:closable="false"
		/>
		<component :is="'el-form'" v-bind="options.form" ref="proFormRef" :model="model">
			<template v-for="item in options.columns" :key="item.prop">
				<component :is="'el-form-item'" v-bind="item.formItem">
					<component :is="`el-${item.attrs.typeName}`" v-bind="item.attrs" v-model="model[item.formItem.prop]" />
				</component>
			</template>
			<el-form-item>
				<slot name="operation"></slot>
			</el-form-item>
		</component>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let model = ref<any>({})
interface columnsItem {
	formItem: {
		label: string
		prop: string
		labelWidth?: string
		required?: boolean
	}
	attrs: {
		typeName: string
		clearable?: boolean
		placeholder?: string
		disabled?: string
	}
}
// interface ProFromProps {
//   form: any;
//   columns: columnsItem[]; // 列配置项
//   requestApi?: (params: any) => Promise<any>; // 请求表格数据的api ==> 必传
//   dataCallback?: (data: any) => any; // 返回数据的回调函数，可以对数
// }
// // 接受父组件参数，配置默认值
// const props = withDefaults(defineProps<ProFromProps>(), {
//   // 表单整体配置项
//   form: {
//     inline: false,
//     labelPosition: "right",
//     labelWidth: "80px",
//     size: "default",
//     disabled: false,
//     labelSuffix: " :"
//   }
// });
const options = ref({
	// 表单整体配置项
	form: {
		inline: false,
		labelPosition: 'right',
		labelWidth: '80px',
		size: 'default',
		disabled: false,
		labelSuffix: ' :',
	},
	// 表单列配置项 (formItem 代表 item 配置项，attrs 代表 输入、选择框 配置项)
	columns: [],
})
// 接收父组件传过来的参数
const acceptParams = (params: ProFromProps): void => {
	console.log(params.columns, 'params')
	options.value.form = params.form
	options.value.columns = params.columns
}
defineExpose({
	acceptParams,
})
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
