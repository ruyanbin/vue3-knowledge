<template>
	<div class="wrapper-data">
		<div id="index" class="d-flex jc-center" ref="appRef">
			<div class="host-body">
				<div class="host-body-header d-flex jc-center">
					<dv-decoration-10 class="dv-dec-10" />
					<div class="d-flex jc-center">
						<dv-decoration-8 class="dv-dec-8" :color="decorationColors" />
						<div class="title">
							<span class="title-text">{{ title }}</span>
							<dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
						</div>
						<dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColors" />
					</div>
					<dv-decoration-10 class="dv-dec-10" />
				</div>
				<div class="d-flex jc-between">
					<div>vue3-UI-DataV</div>
					<div>{{ timeInfo.dateYear }} {{ timeInfo.dateWeek }} {{ timeInfo.dateDay }}</div>
				</div>

				<!--  -->
				<div class="body-box">
					<div class="content-box">
						<div>
							<dv-border-box-12>
								<center-left1 />
							</dv-border-box-12>
						</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
					</div>
					<div class="bototm-box">
						<div>1</div>
						<div>2</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onUnmounted } from 'vue';
import { formatTime } from '@/hooks/view/useTimeRex';
import useDraw from '@/hooks/view/useDraw';
import { WEEK, title, subtitle, moduleInfo } from './utils/index';
import CenterLeft1 from './components/centerLeft1/index.vue'
export default defineComponent({
	components: {
		CenterLeft1
	},
	setup() {
		// * 颜色
		const decorationColors = ['#568aea', '#000000'];
		// * 适配处理
		const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();

		// * 时间内容
		const timeInfo = reactive({
			setInterval: 0,
			dateDay: '',
			dateYear: '',
			dateWeek: '',
		});
		// todo 处理时间监听
		const handleTime = () => {
			clearInterval(timeInfo.setInterval)
			timeInfo.setInterval = window.setInterval(() => {
				const date = new Date();
				timeInfo.dateDay = formatTime(date, 'HH: mm: ss');
				timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd');
				timeInfo.dateWeek = WEEK[date.getDay()];
			}, 1000);
		};
		onUnmounted(() => {
			unWindowDraw()
			clearInterval(timeInfo.setInterval)
		})
		//生命周期
		onMounted(() => {
			handleTime()
			// todo 屏幕适应
			windowDraw()
			calcRate()
		})
		return {
			timeInfo,
			appRef,
			title,
			subtitle,
			moduleInfo,
			decorationColors,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
