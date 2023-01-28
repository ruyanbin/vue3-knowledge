<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_left0.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo.png" alt="" />
					<h2 class="logo-text">
						<TypeIt :values="[title]" :cursor="false" :speed="150" />
					</h2>
				</div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import TypeIt from '@/components/ReTypeit';
import LoginForm from './components/LoginForm.vue';
const title = ref('vue3-admin');
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
