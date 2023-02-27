<template>
	<!-- <div :ref={ chartRef }} :id={{ id }} class={className } :style=
 'height' : height, 'width' : width } /> -->
	<div ref="chartRef" :class="className" :id="id" :style="`height:${height};width:${width}`"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch, onBeforeUnmount, reactive, toRefs } from 'vue';
import * as echarts from 'echarts';
import theme from './theme';
// 定义类型
const PropsType = {
	// 图表唯一 id
	id: String,
	// 图表类名
	className: {
		type: String,
		default: 'chart',
	},
	// 图表宽度
	width: {
		type: String,
		require: true,
	},
	// 图表高度
	height: {
		type: String,
		require: true,
	},
	// 图表数据项
	options: {
		type: Object,
		default: () => ({}),
	},
} as const;
export default defineComponent({
	name: 'Echarts',
	props: PropsType,
	setup(props, { expose }) {
		const chartRef = ref<HTMLElement>();
		const chartsP: any = {
			chart: '',
		};
		/**
		 * 初始化echart
		 * @param data 数据项
		 * @param clearCaching 是否清除缓存
		 */
		const initChart = (data?: any, clearCaching = false) => {
			if (data || props.options) {
				chartsP.chart.setOption(data || props.options, clearCaching);
			}
		};
		// 生命周期
		onMounted(() => {
			// 定义实例
			echarts.registerTheme('myTheme', theme); // 覆盖默认主题
			chartsP.chart = echarts.init(chartRef.value as HTMLElement, 'myTheme');
			initChart();
		});
		onBeforeUnmount(() => {
			chartsP.chart.dispose();
			chartsP.chart = null;
		});
		// 监听改变
		watch(
			() => props.options,
			(val) => {
				val && initChart(val);
			},
			{
				deep: true,
			}
		);
		// 对外暴露接口
		expose({
			chartRef,
			initChart,
		});
		const { id, className, height, width } = toRefs(props);
		return {
			id,
			className,
			height,
			width,
			chartRef,
		};
	},
});
</script>
