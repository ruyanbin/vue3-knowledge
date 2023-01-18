<template>
	<div>
		<div class="card">父-子组件传参</div>
		<childVue :num="num" v-model="valuestr"></childVue>
		<div>使用 v-model</div>
		<childrentwo v-model:title="title" v-model:str="str"></childrentwo>

		<div class="card">子-父组件传参</div>
		<childrenVue :time="time" @aclick="aclick" @numclick="numclick" :carr="fatherFun"></childrenVue>
		<div class="card">子传父组件传参--{{ childrenParent }}</div>
		<div class="card">子传父组件传参--{{ num2 }}</div>
	</div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import childrenVue from './children.vue';
import childVue from './child.vue';
import childrentwo from './childrentwo.vue';
const num = ref(112312);
const num2 = ref<Number>(112312);
const valuestr = ref('v-model 传输');
const childrenParent = ref();
const title = ref('title');
// $attrs
const time = ref(new Date());
const aclick = () => {
	console.log('22222');
};
const str = ref('str');
provide('msg', 'msg');
const numclick = (val: any) => {
	childrenParent.value = val;
};

function fatherFun(n: number) {
	console.log('父组件函数,接收到子组件的值为：', n);
	num2.value = n;
}
</script>
<style lang="scss" scoped></style>
