<template>
<div class="BFC">
	<el-card class="mt10">
			<template #header>
				<div class="card-header">
					<span class="font-medium"> bfc概念 </span>
				</div>
			</template>
		直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。

常见的FC有BFC、IFC（行级格式化上下文），还有GFC（网格布局格式化上下文）和FFC（自适应格式化上下文
		</el-card>	
		<el-card class="mt10">
			<template #header>
				<div class="card-header">
					<span class="font-medium">  触发BFC的方式 </span>
				</div>
			</template>
			1.根元素，即HTML元素
			2.float的值不为none
			3.overflow的值不为visible
			4.display的值为inline-block、table-cell、table-caption
			5.position的值为absolute或fixed
		</el-card>
			<el-card class="mt10">
			<template #header>
				<div class="card-header">
					<span class="font-medium">  布局规则 </span>
				</div>
			</template>
			1.内部的Box会在垂直方向，一个接一个地放置。
			2.Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
			3.每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
			4.BFC的区域不会与float box重叠。
			5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
		</el-card>
					<el-card class="mt10">
			<template #header>
				<div class="card-header">
					<span class="font-medium">  BFC作用 </span>
				</div>
			</template>
			1.自适应两栏布局。
			2.可以阻止元素被浮动元素覆盖
			3.每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
			4.可以包含浮动元素——清除内部浮动。
		</el-card>
				<el-card class="mt10">
			<template #header>
				<div class="card-header">
					<span class="font-medium">  margin穿透问题 </span>
				</div>
			</template>
			<p>解决margin穿透问题可以使用BFC的特性来将父级元素设置为一个独立的BFC，子级元素的margin值就不会溢出父级，而是将父级作为一个独立区域去计算margin值，我们这里用 overflow: hidden 来触发父级的BFC</p>
			<div class="wrapper">
				<div class="inner"></div>
			</div>
		</el-card>
	<el-card class="mt10">
			<template #header>
				<div class="card-header"> bfc 解决margin重叠</div>
			</template>
			<p>那就将元素设置为浮动元素，或者将其设置为 inline-block 元素，或者使用绝对定位，但这些都会对元素的样式产生副作用</p>
			<p>采用将元素设置为 inline-block 元素的方法来演示如何解决这一问题（注意 inline-block 元素对空格敏感，会导致两个div之间出现空隙</p>
			<div>两个inline-block 元素之间如果有空格、回车、tab，那么在页面上就有一个空隙
				两个不同高度的 inline-block 元素顶部无法对齐，或者使用inline-block下面无缘无故多出几像素
				<p>解决方法
				1.去掉空格<br>
				2. 添加父元素，将父元素的 font-size 设置为0，然后在 inline-block 元素中将 font-size 设置为 14px;<br>
				3. 使用margin-right .parent{
							letter-spacing:-5px;
						}<br>
				5. 使用word-spacin    word-spacing:-5px;
				</p>
				</div>
			<div class="bfc-wrapper">
				<div class="bfc-1 ">1</div>
				<div class="bfc-2">2</div>
			</div>
		</el-card>
			<el-card class="mt10">
			<template #header>
				<div class="card-header"> 设置inline-block 后，莫名其妙出现一些空白/两个不同高度的 inline-block 元素顶部无法对齐
				</div>
			</template>
			<p>使用vertical-align--- vertical-align:top;//新增</p>
		</el-card>
</div>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.BFC{
	height: 100%;
	width: 100%;
	overflow: auto;
}
.mt10{
	margin-top: 10px;
}
.wrapper {
  width: 200px;
  height: 200px;
  background-color: pink;
  overflow: hidden;
}
.inner{
	width: 100px;
  height: 100px;
	background: blue;
  margin-top: 50px;
}
.bfc-wrapper {
	width: 100%;
	height: 200px;
	border-top: 1px solid #000;
	overflow: hidden;

	>div {
		height: 50px;
	}

	.bfc-1 {
		background: #f00;
		margin-bottom: 10px;
	}

	.bfc-2 {
		margin-top: 5px;
		display: inline-block;
		background: #f0f;
	}
}
</style>