<template>
	<el-card class="overflow-auto">
		<template #header>
			<div class="card-header">
				<span class="font-medium">grid 布局</span>
			</div>
		</template>

		<el-table :data="data" border style="width: 100%">
			<el-table-column type="expand" label="属性值">
				<template #default="props">
					<el-table :data="props.row.children">
						<el-table-column label="属性" prop="apiValue" />
						<el-table-column label="语法" prop="Grammar" />
						<el-table-column label="描述" prop="Description" />
					</el-table>
				</template>
			</el-table-column>
			<el-table-column prop="api" label="属性"></el-table-column>
			<el-table-column label="语法" prop="Grammar" />
			<el-table-column prop="Description" show-overflow-tooltip label="描述"></el-table-column>
		</el-table>
		<h2>代码示例</h2>
		<div class="grid1">
			<div v-for="item in 9" :key="item" :class="`item${item}`">{{ item }}</div>
		</div>
		<v-md-editor :model-value="item1" mode="preview"></v-md-editor>
		<h2>代码示例2</h2>
		<div class="grid2">
			<div v-for="item in 5" :key="item" :class="`ic${item}`">{{ item }}</div>
		</div>
		<v-md-editor :model-value="ic" mode="preview"></v-md-editor>
	</el-card>
</template>

<script lang="ts" setup>
const data = [
	{
		api: 'grid',
		Description: '是一个 CSS 所有网格容器的简写属性，可以用来设置以下属性：',
		children: [
			{
				apiValue: 'none',
				Description: '默认值。不定义行或列的尺寸。',
			},
			{
				apiValue: 'grid-template-rows / grid-template-columns',
				Description: '设置列和行的尺寸。',
			},
			{
				apiValue: 'grid-template-areas',
				Description: '指定网格布局使用的网格项名称',
			},
			{
				apiValue: 'grid-template-rows / grid-auto-columns',
				Description: '指定行的尺寸（高度），以及列的自动尺寸。',
			},
			{
				apiValue: 'grid-auto-rows / grid-template-columns',
				Description: '指定行的自动尺寸，并设置 grid-template-columns 属性。',
			},
			{
				apiValue: 'grid-template-rows / grid-auto-flow grid-auto-columns',
				Description: '指定行的尺寸（高度），以及自动布局算法怎样运作，和列的自动尺寸',
			},
			{
				apiValue: 'grid-auto-flow grid-auto-rows / grid-template-columns',
				Description: '指定自动布局算法怎样运作，和行的自动尺寸，以及设置 grid-template-columns 属性。',
			},
			{
				apiValue: 'initial',
				Description: '属性设置为默认值 ',
			},
			{
				apiValue: 'inherit',
				Description: '从父原生继承该属性，',
			},
		],
	},
	{
		api: 'grid-template ',
		Description:
			'属性用于网格布局，设置网格中行、列与分区。是以下属性的简写形式：grid- template - rows|grid - template - columns|grid - template - areas',
		Grammar: 'grid-template: none|grid-template-rows / grid-template-columns|grid-template-areas|initial|inherit;',
		children: [
			{
				apiValue: 'none',
				Description: '默认值，不指定行与列的大小。',
			},
			{
				apiValue: 'grid-template rows / grid-template-columns',
				Description: '指定行与列的大小。。',
			},
			{
				apiValue: 'grid-template-areas',
				Description: '使用网格元素的名称来布局网格。',
			},
			{
				apiValue: 'initial',
				Description: '将此属性设置为默认值',
			},
			{
				apiValue: 'inherit',
				Description: '从父元素继承该属性。',
			},
		],
	},
	{
		api: 'grid-area ',
		Description:
			'指定网格元素在网格布局中的大小和位置，是以下属性的简写属性：grid- row - start |grid - column - start |grid - row - end |grid - column - end ',
		Grammar: 'grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end | itemname;',
		children: [
			{
				apiValue: 'grid-row-start',
				Description: '指定在哪一行开始显示网格元素。',
			},
			{
				apiValue: 'grid-column-start',
				Description: '指定在哪一列开始显示网格元素。',
			},
			{
				apiValue: 'grid-row-end',
				Description: '指定哪一行停止显示网格元素，或跨越多少行。',
			},
			{
				apiValue: 'grid-column-end',
				Description: '	指定哪一列停止显示网格元素，或跨越多少列。',
			},
		],
	},
	{
		api: 'grid-gap ',
		Description: 'rid-gap 属性是用来设置网格行与列之间的间隙 是 row-gap 和 column-gap 的简写形式',
		Grammar: 'grid-gap: grid-row-gap grid-column-gap;',
		children: [
			{
				apiValue: 'grid-row-gap',
				Description: '设置网格布局中行之间的间隙大小。默认值为 0。',
			},
			{
				apiValue: 'grid-column-gap',
				Description: '设置网格布局中列之间的间隙大小。默认值为 0。',
			},
		],
	},
	{
		api: 'grid-row ',
		Description: ' 属性定义了网格元素行的开始和结束位置。grid-row 是 grid-row-start 和 grid-row-end 属性的简写属性',
		Grammar: 'grid-row: grid-row-start / grid-row-end;',
		children: [
			{
				apiValue: 'grid-row-start',
				Description: '指定在哪一行开始显示网格元素。',
			},
			{
				apiValue: 'rid-row-end',
				Description: '指定停止显示网格元素的行，或要跨越多少行。',
			},
		],
	},
]
const item1 = `::: tip css代码

	.grid1 {
		display: grid;
		grid: auto auto auto/ auto auto auto;
		grid-gap: 10px;
		background-color: #2196F3;
		padding: 10px;
		>div {
			background-color: rgba(255, 255, 255, 0.8);
			text-align: center;
			padding: 20px 0;
			font-size: 30px;
		}
	}

:::`
const ic = `::: tip css代码

	.ic1 {grid-area: header;}
	.ic2 {grid-area: menu;}
	.ic3 {grid-area: main;}
	.ic4 {grid-area: right;}
	.ic5 {grid-area: footer}
	.grid2 {
		display: grid;
		grid:
			'header header header header header header'
			'menu main main main right right'
			'menu footer footer footer footer footer';
		grid-gap: 10px;
		background-color: #2196F3;
		padding: 10px;
		&>div {
			background-color: rgba(255, 255, 255, 0.8);
			text-align: center;
			padding: 20px 0;
			font-size: 30px;
		}
	}

:::`
</script>
<style lang="scss" scoped>
.grid1 {
	display: grid;
	grid: auto auto auto/ auto auto auto;
	grid-gap: 10px;
	background-color: #2196f3;
	padding: 10px;

	> div {
		background-color: rgba(255, 255, 255, 0.8);
		text-align: center;
		padding: 20px 0;
		font-size: 30px;
	}
}

// 2222
.ic1 {
	grid-area: header;
}

.ic2 {
	grid-area: menu;
}

.ic3 {
	grid-area: main;
}

.ic4 {
	grid-area: right;
}

.ic5 {
	grid-area: footer;
}

.grid2 {
	display: grid;
	grid:
		'header header header header header header'
		'menu main main main right right'
		'menu footer footer footer footer footer';
	grid-gap: 10px;
	background-color: #2196f3;
	padding: 10px;

	& > div {
		background-color: rgba(255, 255, 255, 0.8);
		text-align: center;
		padding: 20px 0;
		font-size: 30px;
	}
}
</style>
