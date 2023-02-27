<template>
	<div class="overflow-auto">
		<el-card>
			<template #header>
				<div class="card-header">
					<span class="font-medium">构造函数+原型的动态原型模式（推荐）</span>
				</div>
			</template>
			<v-md-editor :model-value="text" mode="preview"></v-md-editor>
			<v-md-editor :model-value="code" mode="preview" @copy-code-success="handleCopyCodeSuccess"></v-md-editor>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const text = ref(`::: tip 定义
	1.动态原型方式可以理解为混合构造函数，原型方式的一个特例<br>
	2.该模式中，属性为方法的属性直接在函数中进行了定义，但是因为
	{
	if(typeof Parent.lev=="undefined"){
		Parent.prototype.lev= function(){
		return this.name;
		}
		Parent.lev=true;
		}
	}
		从而保证创建该对象的实例时，属性的方法不会被重复的创建
:::
`);

let code = `
	function Parent(){
		this.name ="李小龙";
		this.age =20;
		if(typeof Parent.lev=="undefined"){
		Parent.prototype.lev= function(){
		return this.name;
		}
		Parent.lev=true;
		}
	};
`;
const handleCopyCodeSuccess = (code: any) => {
	console.log(code, 'code');
};
</script>
<style lang="scss" scoped></style>
