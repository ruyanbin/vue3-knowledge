<template>
	<el-dialog v-model="dialogVisible" modal :title="dialogProps.title" width="30%" draggable>
		<el-form
			ref="ruleFormRef"
			:disabled="dialogProps.isView"
			:model="dialogProps.rowData"
			:rules="rules"
			label-width="120px"
			class="demo-ruleForm"
			status-icon
		>
			<el-form-item label="账号" prop="account">
				<el-input v-model="dialogProps.rowData.account" />
			</el-form-item>
			<el-form-item label="用户名称" prop="username">
				<el-input v-model="dialogProps.rowData.username" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="dialogProps.rowData.password" />
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="dialogProps.rowData.email" />
			</el-form-item>
			<el-form-item label="身份证号" prop="idCard">
				<el-input v-model="dialogProps.rowData.idCard" />
			</el-form-item>
			<el-form-item label="居住地址" prop="address">
				<el-input v-model="dialogProps.rowData.address" />
			</el-form-item>
			<el-form-item label="性别" prop="gender">
				<el-select v-model="dialogProps.rowData.gender" placeholder="请选择性别">
					<el-option label="男" value="1" />
					<el-option label="女" value="2" />
				</el-select>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-select v-model="dialogProps.rowData.status" placeholder="请选择状态">
					<el-option label="启用" value="1" />
					<el-option label="禁用" value="0" />
				</el-select>
			</el-form-item>
		</el-form>
		<el-row justify="space-around">
			<el-col :span="6">
				<el-button type="primary" :disabled="dialogProps.isView" @click="submitForm(ruleFormRef)"> 保存 </el-button>
			</el-col>
			<el-col :span="6">
				<el-button @click="resetForm(ruleFormRef)">取消</el-button>
			</el-col>
		</el-row>
	</el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { ElMessage, FormInstance, FormRules } from 'element-plus';
interface DrawerProps {
	title: string;
	isView: boolean;
	rowData?: any;
	api?: (params: any) => Promise<any>;
	getTableList?: () => Promise<any>;
	// 详情
}

const dialogVisible = ref(false);
const dialogProps = ref<DrawerProps>({
	isView: false,
	title: '',
});
// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
	dialogProps.value = params;
	dialogVisible.value = true;
};
defineExpose({
	acceptParams,
});

const ruleFormRef = ref<FormInstance>();

const validateEmail = (rule: any, value: any, callback: any) => {
	let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if (value === '') {
		callback(new Error('请输入邮箱'));
	} else if (!reg.test(value)) {
		callback(new Error('请输入正确的邮箱'));
	} else {
		callback();
	}
};
const validateAccount = (rule: any, value: any, callback: any) => {
	if (!value) {
		callback(new Error('请输入账号'));
	}
	// else if (value.length !== 6) {
	//   callback(new Error("请输入6位账号"));
	// }
	else {
		callback();
	}
};
const rules = reactive<FormRules>({
	account: [
		{
			required: true,
			validator: validateAccount,
			trigger: 'blur',
		},
	],
	username: [
		{
			required: true,
			message: '请输入用户名称',
			trigger: 'blur',
		},
		{
			min: 3,
			max: 9,
			message: '最多输入9位最短输入3位',
			trigger: 'blur',
		},
	],
	password: [
		{
			required: true,
			message: '请输入密码',
			trigger: 'blur',
		},
		{
			min: 6,
			max: 6,
			message: '密码只能输入6位',
			trigger: 'blur',
		},
	],
	email: [
		{
			required: true,
			validator: validateEmail,
			trigger: 'blur',
		},
	],
	address: [
		{
			required: true,
			message: '请输入居住地址',
			trigger: 'blur',
		},
	],

	idCard: [
		{
			required: true,
			message: '请输入身份账号',
			trigger: 'blur',
		},
	],
});
const submitForm = async (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	await formEl.validate(async (valid, fields) => {
		if (!valid) return;
		try {
			await dialogProps.value.api!(dialogProps.value.rowData);
			ElMessage.success({
				message: `${dialogProps.value.title}用户成功！`,
			});
			dialogProps.value.getTableList!();
			dialogVisible.value = false;
		} catch (error) {
			console.log(error);
		}
	});
};
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.resetFields();
	dialogVisible.value = false;
};
</script>
<style lang="scss" scoped></style>
