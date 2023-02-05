<template>
	<el-card class="overflow-auto">
		<template #header>
			<div class="card-header">
				<span class="font-medium">js原型模式</span>
			</div>
		</template>
		<v-md-editor :model-value="Example" mode="preview"></v-md-editor>
		<v-md-editor :model-value="text" mode="preview"></v-md-editor>
		<v-md-editor :model-value="Expand" mode="preview"></v-md-editor>

	</el-card>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const text = ref(`::: tip 说明:	
		1.函数中不对属性进行定义
		2.利用prototype属性对属性进行定义	
		3.用同一个原型new出来的实例，拥有相同的原型上的属性和方法。
		4.用构造函数创建函数时不可以使用箭头函数。
`)
const Example = `

		function Person () {
		  Person.prototype.name = "marry";
			Person.prototype.sayName = function(){
					console.log(this.name);
			}
		}
 
		const person1 = new Person();
		const person2 = new Person();
		person1.sayName();                                        // marry
		person2.sayName();                                        // marry
		console.log(person1.sayName === person2.sayName);         // true

`
const Expand = ref(`::: tip 拓展
用构造函数创建函数时不可以使用箭头函数。
:::
`)
</script>
<style lang='scss' scoped>

</style>