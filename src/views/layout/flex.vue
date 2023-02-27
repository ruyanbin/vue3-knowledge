<template>
	<div class="card-wrapper">
		<el-card>
			<template #header>
				<div class="card-header">
					<span class="font-medium"> flexApi-容器的属性 </span>
				</div>
			</template>
			<el-table :data="data" height="300" style="width: 100%">
				<el-table-column prop="api" label="属性"></el-table-column>
				<el-table-column prop="apiValue" show-overflow-tooltip label="属性值"></el-table-column>
				<el-table-column prop="Description" show-overflow-tooltip label="描述"></el-table-column>
			</el-table>
		</el-card>
		<el-card class="mt10">
			<template #header>
				<div class="card-header">
					<span class="font-medium"> 项目的属性 </span>
				</div>
			</template>
			<el-table :data="datacli" height="300" style="width: 100%">
				<el-table-column prop="api" label="属性"></el-table-column>
				<el-table-column prop="Description" show-overflow-tooltip label="描述"></el-table-column>
				<el-table-column prop="apiValue" show-overflow-tooltip label="详情"></el-table-column>
			</el-table>
		</el-card>
		<el-card class="mt10">
			<template #header>
				<div class="card-header">
					<span class="font-medium"> 实例 </span>
				</div>
			</template>
			<div class="flex-wrapper">
				<div class="red1">1</div>
				<div class="blue ml10">2</div>
				<div class="yellow ml10">3</div>
			</div>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
const data = [
	{
		api: 'flex-direction',
		Description: 'flex-direction属性决定主轴的方向（即项目的排列方向）。',
		apiValue:
			'row（默认值）：主轴为水平方向，起点在左端|row-reverse：主轴为水平方向，起点在右端。|column：主轴为垂直方向，起点在上沿|column-reverse：主轴为垂直方向，起点在下沿',
	},
	{
		api: 'flex-wrap',
		Description: '默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。',
		apiValue: 'nowrap（默认）：不换行。|wrap：换行，第一行在上方|wrap-reverse：换行，第一行在下方。',
	},
	{
		api: 'flex-flow',
		Description: 'flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap',
		apiValue: 'flex-flow: <flex-direction> <flex-wrap>;',
	},
	{
		api: 'justify-content',
		Description: '定义了项目在主轴上的对齐方式。',
		apiValue:
			'flex-start（默认值）：左对齐|flex-end：右对齐|center： 居中|space-between：两端对齐，项目之间的间隔都相等|space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍',
	},
	{
		api: 'align-items',
		Description: '定义项目在交叉轴上如何对齐。',
		apiValue:
			'flex-start：交叉轴的起点对齐。|flex-end：交叉轴的终点对齐|center：交叉轴的中点对齐|baseline: 项目的第一行文字的基线对齐|stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度',
	},
	{
		api: 'align-content',
		Description: '定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用',
		apiValue:
			'flex-start：交叉轴的起点对齐。|flex-end：交叉轴的终点对齐|center：交叉轴的中点对齐|baseline: 项目的第一行文字的基线对齐|stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度',
	},
]
const datacli = [
	{
		api: 'order',
		Description: 'order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。',
		apiValue: '',
	},
	{
		api: 'flex-grow',
		Description: '定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大',
		apiValue:
			'如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。',
	},
	{
		api: 'flex-shrink',
		Description: '属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。',
		apiValue:
			'如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。',
	},
	{
		api: 'flex-basis',
		Description:
			'定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。',
		apiValue: '它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。',
	},
	{
		api: 'flex',
		Description: 'flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。',
		apiValue:
			" flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。",
	},
	{
		api: 'align-self',
		Description:
			'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。',
		apiValue: 'align-self: auto | flex-start | flex-end | center | baseline | stretch;',
	},
]
</script>
<style lang="scss" scoped>
.card-wrapper {
	height: 100%;
	width: 100%;
	overflow: auto;
}

.mt10 {
	margin-top: 10px;
}

.ml10 {
	margin-left: 10px;
}

.flex-wrapper {
	display: flex;
	height: 400px;
	width: 100%;
	background: #ccc;
	align-content: space-between, center;
	color: #fff;
	font-size: 40px;
	font-weight: 900;

	.red1 {
		flex: 1;
		background: red;
	}

	.blue {
		flex: 3;
		background: blue;
	}

	.yellow {
		flex: 3;
		background: yellow;
	}
}
</style>
