import { onMounted, ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { changeGlobalNodesTarget } from 'element-plus/es/utils';
// 倒计时
export const useInterval = () => {
	const counter = ref(0);
	const { pause, resume } = useIntervalFn(
		() => {
			if (counter.value === 0) {
				pause();
			} else {
				counter.value--;
			}
		},
		1000,
		{ immediate: false }
	);

	const start = (num: number) => {
		if (counter.value != num && counter.value != 0) return;
		counter.value = num;
		resume();
	};

	return { counter, start };
};
