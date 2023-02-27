<template>
	<el-card class="overflow-auto">
		<template #header>
			<div class="card-header">
				<span class="font-medium">js构造函数模式</span>
			</div>
		</template>
		<v-md-editor :model-value="Example" mode="preview"></v-md-editor>
		<v-md-editor :model-value="text" mode="preview"></v-md-editor>
	</el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref(`::: tip 说明：
1.与工厂方式相比，使用构造函数方式创建对象无需在函数内部创建对象，而使用this指代，并而函数无需明确return 
		2.同工厂模式一样，虽然属性的值可以为方法，仍建议该方法定义在函数之外
		3.不推荐使用，但需要了解
:::
`)
const Example = `

		var lev = function () {
			return "嘿哈";
		};
		function Parent(){
			this.name = "李小龙";
			this.age = 20;
			this.lev = lev;
		};
		var x = Parent()

`
</script>
<style lang="scss" scoped></style>
