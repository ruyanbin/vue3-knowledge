<template>
	<div class="card">
		<div class="card-api-item">
			<div class="card-api-item-title">setup</div>
			<div class="card-api-item-Description">
				在 setup() 函数中返回的对象会暴露给模板和组件实例。其它的选项也可以通过组件实例来获取 setup() 暴露的属性<br />
				<span class="red">
					setup() 自身并不含对组件实例的访问权，即在 setup() 中访问 this 会是 undefined。你可以在选项式 API 中访问组合式 API
					暴露的值，但反过来则不行。
				</span>
			</div>
			<div class="card-api-item-code">
				import { ref } from 'vue' export default { setup() { const count = ref(0) // 返回值会暴露给模板和其他的选项式 API 钩子
				return { count } }, mounted() { console.log(this.count) // 0 } }
			</div>
		</div>
		<div class="card-api-item">
			<div class="card-api-item-title">访问props</div>
			<div class="card-api-item-Description">
				setup 函数的第一个参数是组件的 props。和标准的组件一致，一个 setup 函数的 props 是响应式的，并且会在传入新的 props
				时同步更新<br />
				<span class="red">
					解构了 props 对象，解构出的变量将会丢失响应性。因此我们推荐通过 props.xxx 的形式来使用其中的 props。<br />
					需要解构 props 对象，或者需要将某个 prop 传到一个外部函数中并保持响应性,使用 toRefs() 和 toRef() 这两个工具函数
				</span>
			</div>
			<div class="card-api-item-code">
				import { toRefs, toRef } from 'vue' export default { setup(props) { // 将 `props` 转为一个其中全是 ref 的对象，然后解构
				const { title } = toRefs(props) // `title` 是一个追踪着 `props.title` 的 ref console.log(title.value) // 或者，将 `props`
				的单个属性转为一个 ref const title = toRef(props, 'title') } }
			</div>
		</div>
		<div class="card-api-item">
			<div class="card-api-item-title">Setup 上下文</div>
			<div class="card-api-item-Description">
				attrs 和 slots 都是有状态的对象，它们总是会随着组件自身的更新而更新。应当避免解构它们，并始终通过 attrs.x 或 slots.x
				的形式使用其中的属性

				<span class="red">
					和 props 不同，attrs 和 slots 的属性都不是响应式的。如果你想要基于 attrs 或 slots 的改变来执行副作用，那么你应该在
					onBeforeUpdate 生命周期钩子中编写相关逻辑。<br />
					expose 函数用于显式地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问 expose
					函数暴露出的内容：
				</span>
			</div>
			<div class="card-api-item-code">
				export default { setup(props, context) { // 透传 Attributes（非响应式的对象，等价于 $attrs） console.log(context.attrs) //
				插槽（非响应式的对象，等价于 $slots） console.log(context.slots) // 触发事件（函数，等价于 $emit）
				console.log(context.emit) // 暴露公共属性（函数） console.log(context.expose) } }
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const setupstr = ref(`

export default {
  setup() {
    const count = ref(0)
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
`)
</script>
<style lang="scss" scoped>
.card-api-item {
	margin: 10px 0;
}
.card-api-item-code {
	width: 100%;
	height: auto;
	border-radius: 1rem;
	padding: 5px;
	background: #000;
	color: #fff;
}
.red {
	color: red;
}
</style>
