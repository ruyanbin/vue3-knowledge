<template>
	<div class="overflow-auto">
		<el-card>
			<template #header>
				<div class="card-header">
					<span class="font-medium">发布订阅者</span>
				</div>
			</template>
			描述：<br>
			订阅者（Subscriber）把自己想订阅的事件 注册（Subscribe）到调度中心（Event Channel）<br>
			当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由 调度中心 统一调度（Fire Event）订阅者注册到调度中心的处理代码。<br>
			思路：<br>
			创建一个类 class <br>
			在这个类里创建一个缓存列表(调度中心)<br>
			on 方法 - 用来把函数fn添加到缓存列表(订阅者注册事件到调度中心)<br>
			emit 方法 - 取到event事件类型，根据event值去执行对应缓存列表中的函数(发布者发布事件到调度中心，调度中心处理代码)<br>
			off 方法 - 可以根据event事件类型取消订阅(取消订阅)<br>
			class Observer {<br>
			constructor() {
			// 消息队列
			this.message = {} <br>
			}<br>
			/**<br>
			* `$on` 向消息队列添加内容<br>
			* @param {*} type 事件名 (事件类型)<br>
			* @param {*} callback 回调函数<br>
			*/<br>
			$on(type,callback){<br>
			// 判断有没有这个属性（事件类型）
			if (!this.message[type]) {<br>
			// 如果没有这个属性，就初始化一个空的数组
			this.message[type] = [];<br>
			}<br>
			// 如果有这个属性，就往他的后面push一个新的callback<br>
			this.message[type].push(callback)
			}<br>
			/**
			* $off 删除消息队列里的内容
			* @param {*} type 事件名 (事件类型)
			* @param {*} callback 回调函数
			*/<br>
			$off(type, callback){<br>
			// 判断是否有订阅，即消息队列里是否有type这个类型的事件，没有的话就直接return<br>
			if (!this.message[type]) return;<br>
			// 判断是否有callback这个参数<br>
			if (!callback) {<br>
			// 如果没有callback,就删掉整个事件ß<br>
			this.message[type] = undefined;<br>
			}<br>
			// 如果有callback,就仅仅删掉callback这个消息(过滤掉这个消息方法)<br>
			this.message[type] = this.message[type].filter((item) => item !== callback);<br>
			}<br>
			// 触发消息队列里的内容
			$emit(){}<br>
			}<br>
			// 使用构造函数创建一个实例<br>
			const person1 = new Observer();<br>

			// 向这个`person1`委托一些内容，调用`person1 `的`$ON`方法<br>
			person1.$on('买红宝石', handlerA)<br>
			person1.$on('买红宝石', handlerB)<br>
			function handlerA() {
			console.log('handlerA');
			}<br>
			function handlerB() {
			console.log('handlerB');
			}<br>

		</el-card>
		<v-md-editor :model-value="text" mode="preview"></v-md-editor>
	</div>
</template>

<script lang='ts' setup>import { ref } from 'vue';

const text = ref(`# 序
        开始预览组件的使用
* 看
* 写
* 运行`)
</script>
<style lang='scss' scoped>
.overflow-auto {
	height: 100%;
	width: 100%;
	overflow: auto;
}
</style>