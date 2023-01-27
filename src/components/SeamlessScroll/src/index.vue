<template>
	<div>2132</div>
</template>

<script lang="ts" setup>
import { computed, ref, unref, nextTick } from 'vue';
import type { CSSProperties, PropType } from 'vue';
// tryOnMounted 安全onMounted。如果在组件生命周期内，请调用onMounted()，如果没有，只需调用函数
// tryOnUnmounted 安全onUnmounted。如果onUnmounted()组件生命周期内，请调用Unmounted()，如果没有，则什么都不做
// templateRef 绑定参考模板元素的简写
// DebounceFn  反弹执行函数
import { tryOnMounted, tryOnUnmounted, templateRef, useDebounceFn } from '@vueuse/core';
// import * as 一次性全部导入模块的所有变量就可以使用    * as 代表全部
import * as utilsMethods from './utils';
const { animationFrame, copyObj } = utilsMethods;
animationFrame();
const props = defineProps({
	data: {
		//数据
		type: Array as PropType<unknown>,
	},
	classOption: {
		//滚动方向
		type: Object as PropType<unknown>,
	},
});
const emit = defineEmits<{
	(e: 'scrollEnd'): void;
}>();
const xPos = ref<number>(0);
const yPos = ref<number>(0);
const delay = ref<number>(0);
const height = ref<number>(0);
// 外容器宽度
const width = ref<number>(0);
// 内容实际宽度
const realBoxWidth = ref<number>(0);
const realBoxHeight = ref<number>(0);
const copyHtml = ref('');
// single 单步滚动的定时器
let singleWaitTime = null;
// move动画的animationFrame定时器
let reqFrame = null;
let startPos = null;
//记录touchStart时候的posY
let startPosY = null;
//记录touchStart时候的posX
let startPosX = null;
// mouseenter mouseleave 控制scrollMove()的开关
let isHover = false;
let ease = 'ease-in';
// eslint-disable-next-line vue/no-setup-props-destructure
const { classOption } = props;
if (classOption['key'] === undefined) {
	classOption['key'] = 0;
}

const wrap = templateRef<HTMLElement | null>(`wrap${classOption['key']}`, null);
const slotList = templateRef<HTMLElement | null>(`slotList${classOption['key']}`, null);
const realBox = templateRef<HTMLElement | null>(`realBox${classOption['key']}`, null);

const leftSwitchState = computed(() => {
	return unref(xPos) < 0;
});
const rightSwitchState = computed(() => {
	return Math.abs(unref(xPos)) < unref(realBoxWidth) - unref(width);
});
const defaultOption = computed(() => {
	return {
		//步长
		step: 1,
		//启动无缝滚动最小数据数
		limitMoveNum: 5,
		//是否启用鼠标hover控制
		hoverStop: true,
		// bottom 往下 top 往上(默认) left 向左 right 向右
		direction: 'top',
		//开启移动端touch
		openTouch: true,
		//单条数据高度有值hoverStop关闭
		singleHeight: 0,
		//单条数据宽度有值hoverStop关闭
		singleWidth: 0,
		//单步停止等待时间
		waitTime: 1000,
		switchOffset: 30,
		autoPlay: true,
		navigation: false,
		switchSingleStep: 134,
		switchDelay: 400,
		switchDisabledClass: 'disabled',
		// singleWidth/singleHeight 是否开启rem度量
		isSingleRemUnit: false,
	};
});
const options = computed(() => {
	// @ts-expect-error
	return copyObj({}, unref(defaultOption), classOption);
});
const leftSwitchClass = computed(() => {
	return unref(leftSwitchState) ? '' : unref(options).switchDisabledClass;
});
const rightSwitchClass = computed(() => {
	return unref(rightSwitchState) ? '' : unref(options).switchDisabledClass;
});
const leftSwitch = computed((): CSSProperties => {
	return {
		position: 'absolute',
		margin: `${unref(height) / 2}px 0 0 -${unref(options).switchOffset}px`,
		transform: 'translate(-100%,-50%)',
	};
});
const rightSwitch = computed((): CSSProperties => {
	return {
		position: 'absolute',
		margin: `${unref(height) / 2}px 0 0 ${unref(width) + unref(options).switchOffset}px`,
		transform: 'translateY(-50%)',
	};
});
//判断是否向上或向下移动
const isHorizontal = computed(() => {
	return unref(options).direction !== 'bottom' && unref(options).direction !== 'top';
});
// 当不是上下滚动时 样式添加 浮动和超出隐藏
const float = computed((): CSSProperties => {
	return unref(isHorizontal) ? { float: 'left', overflow: 'hidden' } : { overflow: 'hidden' };
});
const pos = computed(() => {
	return {
		transform: `translate(${unref(xPos)}px,${unref(yPos)}px)`,
		transition: `all ${ease} ${unref(delay)}ms`,
		overflow: 'hidden',
	};
});
// 场景
const navigation = computed(() => {
	return unref(options).navigation;
});
// 没有指定场景 自动播放
const autoPlay = computed(() => {
	if (unref(navigation)) return false;
	return unref(options).autoPlay;
});
const scrollSwitch = computed(() => {
	// 从 props 解构出来的 属性 不再具有响应性.
	return (props.data as any).length >= unref(options).limitMoveNum;
});
// 启用鼠标hover控制
const hoverStopSwitch = computed(() => {
	return unref(options).hoverStop && unref(autoPlay) && unref(scrollSwitch);
});
//开启移动端touch
const canTouchScroll = computed(() => {
	return unref(options).openTouch;
});
</script>

<style lang="scss" scoped></style>
