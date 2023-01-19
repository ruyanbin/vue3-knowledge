<template>
	<el-dropdown trigger="click">
		<div class="avatar">
			{{ user.username }}
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="openDialog('infoRef')">
					<el-icon><User /></el-icon>{{ $t('header.personalData') }}
				</el-dropdown-item>
				<el-dropdown-item @click="openDialog('passwordRef')">
					<el-icon><Edit /></el-icon>{{ $t('header.changePassword') }}
				</el-dropdown-item>
				<el-dropdown-item @click="logout" divided>
					<el-icon><SwitchButton /></el-icon>{{ $t('header.logout') }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<!-- infoDialog -->
	<InfoDialog ref="infoRef"></InfoDialog>
	<!-- passwordDialog -->
	<PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { GlobalStore } from '@/stores';
import { LOGIN_URL } from '@/config/config';
import { resetRouter } from '@/router/index';
import InfoDialog from './InfoDialog.vue';
import PasswordDialog from './PasswordDialog.vue';
import { ElMessageBox, ElMessage } from 'element-plus';
const router = useRouter();
const globalStore = GlobalStore();
const user = JSON.parse(globalStore.userInfo);
// 退出登录
const logout = () => {
	ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(() => {
		resetRouter();
		globalStore.setToken('');
		router.replace(LOGIN_URL);
		ElMessage({
			type: 'success',
			message: '退出登录成功！',
		});
	});
};

interface DialogExpose {
	openDialog: () => void;
}
const infoRef = ref<null | DialogExpose>(null);
const passwordRef = ref<null | DialogExpose>(null);
// 打开修改密码和个人信息弹窗
const openDialog = (refName: string) => {
	if (refName == 'infoRef') infoRef.value?.openDialog();
	else passwordRef.value?.openDialog();
};
</script>
<style lang="scss" scoped></style>
