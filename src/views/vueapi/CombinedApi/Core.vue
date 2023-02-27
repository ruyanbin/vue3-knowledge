<template>
	<div class="card">
		<div class="card-api-item">
			<div class="card-api-item-title">ref</div>
			<div class="card-api-item-Description">
				接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。
				<br />
				<div class="red">
					ref 对象是可更改的即所有对 .value 的操作都将被追踪，并且写操作会触发与之相关的副作用。<br />
					如果将一个对象赋值给 ref，那么这个对象将通过 reactive() 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的
					ref，它们将被深层地解包。<br />
					若要避免这种深层次的转换，请使用 shallowRef() 来替代。
				</div>
			</div>
			<div class="card-api-item-content">const count = ref(0) console.log(count.value)</div>
			<div class="card-api-item-content">{{ refts }}}</div>
		</div>
		<div class="card-api-item">
			<div class="card-api-item-title">readonly</div>
			<div class="card-api-item-Description">
				接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。
				<br />
				<div class="red">
					只读代理是深层的：对任何嵌套属性的访问都将是只读的。它的 ref 解包行为与 reactive() 相同，但解包得到的值是只读的。。<br />

					要避免深层级的转换行为，请使用 shallowReadonly() 作替代。
				</div>
			</div>
			<div class="card-api-item-content">
				const original = reactive({ count: 0 }) const copy = readonly(original) watchEffect(() => { // 用来做响应性追踪
				console.log(copy.count) }) // 更改源属性会触发其依赖的侦听器 original.count++ // 更改该只读副本
			</div>
		</div>
		<div class="card-api-item">
			<div class="card-api-item-title">watchEffect()</div>
			<div class="card-api-item-Description">
				立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。
				<br />
				<div class="red">
					第一个参数就是要运行的副作用函数。这个副作用函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求
					(参见下面的示例)。 第二个参数是一个可选的选项，可以用来调整副作用的刷新时机或调试副作用的依赖。
					默认情况下，侦听器将在组件渲染之前执行。设置 flush: 'post'
					将会使侦听器延迟到组件渲染之后再执行。详见回调的触发时机。在某些特殊情况下
					(例如要使缓存失效)，可能有必要在响应式依赖发生改变时立即触发侦听器。这可以通过设置 flush: 'sync'
					来实现。然而，该设置应谨慎使用，因为如果有多个属性同时更新，这将导致一些性能和数据一致性的问题。
					返回值是一个用来停止该副作用的函数。
				</div>
			</div>
			<div class="card-api-item-content">
				const original = reactive({ count: 0 }) const copy = readonly(original) watchEffect(() => { // 用来做响应性追踪
				console.log(copy.count) }) // 更改源属性会触发其依赖的侦听器 original.count++ // 更改该只读副本
			</div>
		</div>
		<div class="card-api-item">
			<div class="card-api-item-title">watch()</div>
			<div class="card-api-item-Description">
				侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。
				<br />
				<div class="red">
					watch() 默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。 第一个参数是侦听器的源。这个来源可以是以下几种：
					一个函数，返回一个值 一个 ref 一个响应式对象 ...或是由以上类型的值组成的数组
					第二个参数是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数。该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求。
					当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值。 第三个可选的参数是一个对象，支持以下这些选项：
					immediate：在侦听器创建时立即触发回调。第一次调用时旧值是 undefined。
					deep：如果源是对象，强制深度遍历，以便在深层级变更时触发回调。参考深层侦听器。
					flush：调整回调函数的刷新时机。参考回调的刷新时机及 watchEffect()。 onTrack /
					onTrigger：调试侦听器的依赖。参考调试侦听器。 与 watchEffect() 相比，watch() 使我们可以： 懒执行副作用；
					更加明确是应该由哪个状态触发侦听器重新执行； 可以访问所侦听状态的前一个值和当前值。
				</div>
			</div>
			<div class="card-api-item-content">
				const original = reactive({ count: 0 }) const copy = readonly(original) watchEffect(() => { // 用来做响应性追踪
				console.log(copy.count) }) // 更改源属性会触发其依赖的侦听器 original.count++ // 更改该只读副本
			</div>
		</div>
		<div>
			watch、watchEffect 和 computed 的对比<br />
			watch 懒执行副作用——需要手动指明侦听的内容，也要指明侦听的回调。<br />
			默认 immdiate 是 false，所以初始化时不会执行，仅在侦听的源数据变更时才执行回调。<br />
			不需要有返回值。 可以获得变化前的值（oldVal）。<br />
			watchEffect 自动收集依赖，不需要手动传递侦听内容——自动侦听回调函数中使用到的响应式数据<br />
			默认 immdiate 是 true，所以初始化时会立即执行，同时源数据变更时也会执行回调。 不需要有返回值。
			无法获得变化前的值（oldVal）。<br />
			computed 注重的计算出来的值（回调函数的返回值）， 所以必须要写返回值。
		</div>
	</div>
</template>

<script lang="ts" setup>
const refts: Ref<String> = ref(`import type { Ref } from 'vue'

const year: Ref<string | number> = ref('2020')`)
</script>
<style lang="scss" scoped>
.card-api-item {
	height: auto;
	width: 100%;
	.card-api-item-title {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
	}
}
</style>
