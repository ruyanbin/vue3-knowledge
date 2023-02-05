<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<span class="font-medium">js构造函数模式</span>
			</div>
		</template>
		<br>
		例子:
		var lev=function(){
		return "嘿哈";
		};
		function Parent(){
		this.name ="李小龙";
		this.age =20;
		this.lev=lev;
		};
		var x=Parent()<br>
		var x=Parent();

		说明：<br>
		1.与工厂方式相比，使用构造函数方式创建对象无需在函数内部创建对象，而使用this指代，并而函数无需明确return <br>
		2.同工厂模式一样，虽然属性的值可以为方法，仍建议该方法定义在函数之外<br>
		3.不推荐使用，但需要了解<br>
	</el-card>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>

</style>