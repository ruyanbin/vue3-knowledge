<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium">构造函数+原型的js混合模式（推荐）</span>
			</div>
		</template>
		例子:<br>

		function Parent(){
		this.name ="李小龙";
		this.age =20;
		};<br>
		Parent.prototype.lev= function(){
		return this.name;
		}<br>
		var x=Parent()<br>

		说明：<br>
		1.该模式是指混合搭配使用构造函数和原型方式<br>
		2.将所有的属性，不是方法的定义在函数中，将所有属性值为方法的利用prototype在函数之外定义<br>

	</el-card>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>

</style>