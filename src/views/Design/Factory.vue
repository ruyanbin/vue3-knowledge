<template>
	<el-card class="overflow-auto">
		<template #header>
			<div class="card-header">
				<span class="font-medium">工厂模式</span>
			</div>
		</template>

		<v-md-editor :model-value="Example" mode="preview"></v-md-editor>
		<v-md-editor :model-value="text" mode="preview"></v-md-editor>
	</el-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const text = ref(`::: tip 说明
根据不同的输入返回不同类的实例，一般用来创建同一类对象
工厂方式的主要思想是将对象的创建与对象的实现分离。
工厂模式的使用场景：

对象的创建比较复杂，而访问者无需知道创建的具体流程；
处理大量具有相同属性的小对象；
:::
::: tip 说明工厂模式与模板方法模式的主要区别是：
工厂模式主要关注产品实例的创建，对创建流程封闭起来；
模板方法模式 主要专注的是为固定的算法骨架提供某些步骤的实现；
:::`);
const Example = ref(`
	var lev=function(){
		return "嘿哈";
		};
		function Parent(){
			var Child=new Object();
			Child.name="李小龙";
			Child.age=20;
			Child.lev=lev;
			return Child;
		};
		var x=Parent();
		#es6
		class Restaurant {
			constructor() {
			this.menuData = {}
		}
		getMenu(menu) {
			if (!this.menuData[menu]){
			  throw new Error('这个菜本店没有')
		  };
			const { type, message } = this.menuData[menu];
			return new Menu(type, message);
		}
		// 增加菜品
		addMenu(menu, type, message) {
			if (this.menuData[menu]) {
				console.Info('已经有这个菜了!')
				return
			};
			this.menuData[menu] = { type, message }
		}
		// 移除菜品
		removeMenu(menu) {
			if (!this.menuData[menu]) return
				delete this.menuData[menu]
			}
		}
		// 菜品类
		class Menu {
			constructor(type, message) {
			this.type = type
			this.message = message
			}
			eat() {
			console.log(this.type + this.message)
			}
		}
`);
</script>
<style lang="scss" scoped></style>
