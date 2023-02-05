<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium">js原型模式</span>
			</div>
		</template>
		例子:<br>
		function Parent(){
		Parent.prototype.name ="李小龙";
		Parent.prototype.age =20;
		Parent.prototype.lev=function(){
		console.log(this.name)
		};
		};
		var x=Parent()<br>

		说明：<br>
		1.函数中不对属性进行定义<br>
		2.利用prototype属性对属性进行定义<br>
		3.用同一个原型new出来的实例，拥有相同的原型上的属性和方法。<br>
		4.用构造函数创建函数时不可以使用箭头函数。
	</el-card>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>

</style>