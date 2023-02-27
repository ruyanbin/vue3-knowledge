<template>
	<div class="overflow-auto">
		<el-card>
			<template #header>
				<div class="card-header">
					<span class="font-medium">发布订阅者</span>
				</div>
			</template>
			<v-md-editor :model-value="text" mode="preview"></v-md-editor>
			<v-md-editor :model-value="jsstr" mode="preview"></v-md-editor>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref(`::: tip 定义
  订阅者（Subscriber）把自己想订阅的事件 注册（Subscribe）到调度中心（Event Channel）
当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由 调度中心 统一调度（Fire Event）订阅者注册到调度中心的处理代码。
:::

::: tip 思路
  创建一个类 class
在这个类里创建一个缓存列表(调度中心)
on 方法 - 用来把函数fn添加到缓存列表(订阅者注册事件到调度中心)
emit 方法 - 取到event事件类型，根据event值去执行对应缓存列表中的函数(发布者发布事件到调度中心，调度中心处理代码)
off 方法 - 可以根据event事件类型取消订阅(取消订阅)
:::


`)
const jsstr: string = `

	/**
	 * 声明类Observer
	 */
	class Observer {
	constructor() {
		this.message = {} // 消息队列
	}
		/**
	 * $on 向消息队列添加内容 
	 * @param {*} type 事件名 (事件类型)
	 * @param {*} callback 回调函数
	 */
	$on(type, callback) {
		// 判断有没有这个属性（事件类型）
		if (!this.message[type]) {
			// 如果没有这个属性，就初始化一个空的数组
			this.message[type] = [];
		}
		// 如果有这个属性，就往他的后面push一个新的callback
		this.message[type].push(callback);
	}

	/**
	 * $off 删除消息队列里的内容
	 * @param {*} type 事件名 (事件类型)
	 * @param {*} callback 回调函数
	 */
	$off(type, callback) {
		// 判断是否有订阅，即消息队列里是否有type这个类型的事件，没有的话就直接return
		if (!this.message[type]) return;
		// 判断是否有callback这个参数
		if (!callback) {
			// 如果没有callback,就删掉整个事件
			this.message[type] = undefined;
			return;
		}
		// 如果有callback,就仅仅删掉callback这个消息(过滤掉这个消息方法)
		this.message[type] = this.message[type].filter((item) => item !== callback);
	}

	/**
	 * $emit 触发消息队列里的内容
	 * @param {*} type 事件名 (事件类型)
	 */
	$emit(type) {
		// 判断是否有订阅
		if (!this.message[type]) return;
		// 如果有订阅，就对这个type事件做一个轮询 (for循环)
		this.message[type].forEach(item => {
			// 挨个执行每一个消息的回调函数callback
			item()
		});
	}
}
`
const handleCopyCodeSuccess = (code: any) => {
	console.log(code)
}
</script>
<style lang="scss" scoped>
.overflow-auto {
	height: 100%;
	width: 100%;
	overflow: auto;
}
</style>
