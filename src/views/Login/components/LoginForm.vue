<template>
	<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
		<el-form-item prop="username">
			<el-input :prefix-icon="User" v-model="ruleForm.username" placeholder="请输入账号"> </el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" show-password :prefix-icon="Lock" />
		</el-form-item>
		<el-form-item prop="verificationCode">
			<el-input v-model="ruleForm.verificationCode" placeholder="请输入验证码">
				<template #append>
					<el-button @click="send">{{ counter == 0 ? '发送验证码' : counter }}</el-button>
				</template>
			</el-input>
		</el-form-item>
		<el-row justify="space-around">
			<el-col :span="5"> <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button></el-col>
			<el-col :span="5"><el-button @click="resetForm(ruleFormRef)">重制</el-button></el-col>
		</el-row>
	</el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { getTimeState } from '@/utils/util'
import { HOME_URL } from '@/config/config'
import { useRouter } from 'vue-router'
import { GlobalStore } from '@/stores'
import { TabsStore } from '@/stores/modules/tabs'
import { loginApi } from '@/api/modules/login'
import { initDynamicRouter } from '@/router/modules/dynamicRouter'
import { useInterval } from '@/hooks/useInterval'

import { clippingParents } from '@popperjs/core'
const { counter, start } = useInterval()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
	username: '',
	password: '',
	verificationCode: '',
})
const rules = reactive<FormRules>({
	username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
	verificationCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
})
//
const router = useRouter()
const tabsStore = TabsStore()
const globalStore = GlobalStore()
const submitForm = async (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.validate((valid) => {
		if (valid) {
			login()
		} else {
			console.log('error submit!')
			return false
		}
	})
}
// 发送验证码

const send = () => {
	if (!ruleForm.username) return ElMessage.error('请输入账号')
	start(60)
	ElMessage.success('验证码发送成功')
}
// 登录
const login = async () => {
	const res = await loginApi(ruleForm)
	console.log(res, 'res')
	if (res.data?.token) {
		globalStore.setToken(res.data?.token)
		await initDynamicRouter()
		globalStore.setUserInfo(JSON.stringify(ruleForm))
		ElNotification({
			title: getTimeState(),
			message: '欢迎登录 vue3-Admin',
			type: 'success',
			duration: 3000,
		})
		// 3.清除上个账号的 tab 信息
		tabsStore.closeMultipleTab()
		router.push(HOME_URL)
	}
}
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}
</script>
