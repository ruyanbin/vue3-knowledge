<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium">工厂模式</span>
			</div>
		</template>
		<br>
		例子
		var lev=function(){
		return "嘿哈";
		};<br>
		function Parent(){
		var Child=new Object();
		Child.name="李小龙";
		Child.age=20;
		Child.lev=lev;
		return Child;
		};<br>
		var x=Parent();
		<h4>高阶</h4>
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
		<br>
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
		说明：<br>
		1.建议将属性为方法的属性定义到函数之外，这样可以避免重复创建该方法<br>
		2.在引用该对象的时候，使用var x=Parent()，不建议使用var x=new object();因为用了new会出现很多问题。<br>
		3.在函数的最后返回该对象<br>
		4.不推荐使用这种方式创建对象<br>

	</el-card>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';

const lev = () => {
	return "嘿哈";
};
const Parent = () => {
	const Child = reactive<any>({})
	Child.name = "李小龙";
	Child.age = 20;
	Child.lev = lev;
	return Child;
};
let x = Parent();
console.log(x.name);//李小龙
console.log(x.lev());//嘿哈
</script>
<style lang='scss' scoped>

</style>