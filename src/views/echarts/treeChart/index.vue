<template>
	<div ref="echartsRef" class="card content-box"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { useEcharts } from '@/hooks/useEcharts'
import data from './data'
const echartsRef = ref<HTMLElement>()

onMounted(() => {
	let myChart: echarts.ECharts = echarts.init(echartsRef.value as HTMLElement)
	let option: echarts.EChartsOption = {
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove',
		},
		series: [
			{
				type: 'tree',

				data: [data],

				top: '1%',
				left: '7%',
				bottom: '1%',
				right: '20%',

				symbolSize: 7,

				label: {
					position: 'left',
					verticalAlign: 'middle',
					align: 'right',
					fontSize: 9,
				},

				leaves: {
					label: {
						position: 'right',
						verticalAlign: 'middle',
						align: 'left',
					},
				},

				emphasis: {
					focus: 'descendant',
				},

				expandAndCollapse: true,
				animationDuration: 550,
				animationDurationUpdate: 750,
			},
		],
	}
	useEcharts(myChart, option)
})
</script>
<style lang="scss" scoped></style>
