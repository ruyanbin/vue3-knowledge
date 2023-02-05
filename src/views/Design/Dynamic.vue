<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium">构造函数+原型的动态原型模式（推荐）</span>
			</div>
		</template>
		例子:<br>
		function Parent(){
		this.name ="李小龙";
		this.age =20;
		if(typeof Parent.lev=="undefined"){
		Parent.prototype.lev= function(){
		return this.name;
		}
		Parent.lev=true;
		}
		};<br>

		说明：<br>
		1.动态原型方式可以理解为混合构造函数，原型方式的一个特例<br>
		2.该模式中，属性为方法的属性直接在函数中进行了定义，但是因为
		if(typeof Parent.lev=="undefined"){
		Parent.prototype.lev= function(){
		return this.name;
		}
		Parent.lev=true;
		}
		从而保证创建该对象的实例时，属性的方法不会被重复的创建
		<br>

	</el-card>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>

</style>