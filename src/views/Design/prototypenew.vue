<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium">构造函数+原型的js混合模式（推荐）</span>
			</div>
		</template>
		<v-md-editor :model-value="text" mode="preview"></v-md-editor>
		<v-md-editor :model-value="Expand" mode="preview"></v-md-editor>
	</el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref(`::: tip 说明:
1.该模式是指混合搭配使用构造函数和原型方式
		2.将所有的属性，不是方法的定义在函数中，将所有属性值为方法的利用prototype在函数之外定义
:::`)
const Expand = ref(`
  
		function Parent(){
			this.name ="李小龙";
			this.age =20;
		};
		Parent.prototype.lev= function(){
			return this.name;
		}
		var x=Parent()
		
		`)
</script>
<style lang="scss" scoped></style>
