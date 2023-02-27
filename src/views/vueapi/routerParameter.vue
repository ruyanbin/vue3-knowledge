<template>
	<div class="card">
		<div class="vue-api-title">路由传参</div>
		<el-input v-model="input" placeholder="请输入"></el-input>
		router-link
		<router-link custom :to="{ path: '/vuedetail', query: { input: input } }"> query</router-link>
		<router-link :to="{ path: '/vuedetail', query: { input: input } }"> query---1</router-link>
		<router-link :to="{ name: 'params', params: { id: '123' } }">params</router-link>
		<div></div>
		编程式
		<el-button @click="query">query--path传值</el-button>
		<el-button @click="queryName">query--name传值</el-button>
		<el-button @click="paramsName">params--name传值</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const input = ref('')
const router = useRouter()
const query = () => {
	router.push({ path: '/vuedetail', query: { input: input.value } })
}
const queryName = () => {
	router.push({ name: 'vuedetail', query: { input: input.value } })
}
const paramsName = () => {
	// router.push({ name: 'vuedetail', params: { input: input.value } });
	router.push({ name: 'params', params: { id: 'posva' } })
}
</script>
<style lang="scss" scoped>
.router-link-active {
	color: #f00;
}
a {
	margin-left: 10px;
}
</style>
