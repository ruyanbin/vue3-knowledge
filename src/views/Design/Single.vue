<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium">单例模式</span>
			</div>
		</template>
		说明<br>
		单例模式（Singleton Pattern）涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一对象的方式，可以直接访问，不需要实例化该类的对象
		特点：<br>
		单例类只能有一个实例。<br>
		单例类必须自己创建自己的唯一实例。<br>
		单例类必须给所有其他对象提供这一实例。<br>
		例子:<br>
		let box;
		const createBox = (_a, _b) => {
		if(!box){
		box = {};
		}
		box.a = _a;
		box.b = _b;
		return box;
		};
		const obj1 = createBox(3, 6);
		obj1; // {a: 3, b: 6}
		const obj2 = createBox(10, 20);
		obj1; // {a: 10, b: 20}
		obj2; // {a: 10, b: 20}
		说明：<br>
		1.单例模式可以创建多个实例，但是，只要改变其中任一实例对象的属性值，其他所有的实例对象的属性值都变了。所以，单例类只能有一个实例，否则就会出错。<br>
	</el-card>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>

</style>