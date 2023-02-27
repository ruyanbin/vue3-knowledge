<template>
	<div ref="loginRef" class="login-container flx-center">
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
//导入vanta.js和three.js，以及ref等hooks
import * as THREE from 'three';
import CLOUDS from 'vanta/src/vanta.waves';
import TypeIt from '@/components/ReTypeit';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import LoginForm from './components/LoginForm.vue';
const title = ref('vue3-admin');
//使用ref引用挂载区域
const loginRef = ref(null);
//创建一个全局的变量来使用vanta.js

//  *因为在vue2中，是使用this.vantaEffect来创建指定的3d动画模板的
//  *但是vue3 setup中是没有this，所以要另外创建一个
let vantaEffect: {
	[x: string]: any;
	destroyed: () => void;
} | null = null;
onMounted(() => {
	vantaEffect = CLOUDS({
		el: loginRef.value,
		THREE: THREE,
		// 如果需要改变样式写在这里 因为 vantaeffect 没有setOptions 方法
		color: 0x16212a,
	});
});
onBeforeUnmount(() => {
	if (vantaEffect) {
		vantaEffect.destroy();
	}
});
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
