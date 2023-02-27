<template>
	<div class="card">
		<el-table border :data="tableData" height="80vh" :row-class-name="tableRowClassName" stripe style="width: 100%">
			<!-- show-overflow-tooltip overflow-tooltip	当内容过长被隐藏时显示 tooltip-->
			<el-table-column prop="api" label="api名称" width="100" />
			<el-table-column prop="Description" label="描述" show-overflow-tooltip />
			<el-table-column prop="Different" label="不同" show-overflow-tooltip />
			<el-table-column prop="Advantages" label="优点" show-overflow-tooltip />
			<el-table-column prop="Code" label="示例" />
		</el-table>
	</div>
</template>

<script lang="ts" setup>
const tableData = [
	{
		api: 'shallowRef()',
		Description: 'ref() 的浅层作用形式',
		Different:
			'和 ref() 不同，浅层 ref 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。shallowRef() 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。只有对 .value 的访问是响应式的',
		Advantages: '指南 - 减少大型不可变结构的响应性开销指南 - 与其他状态系统集成',
		Code: `const state = shallowRef({ count: 1 })
				state.value.count = 2// 不会触发更改
				state.value = { count: 2 }// 会触发更改`,
	},
	{
		api: 'triggerRef()',
		Description: '强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。',
		Different: '',
		Advantages: '',
		Code: `const shallow = shallowRef({greet: 'Hello, world'})
		// 触发该副作用第一次应该会打印 "Hello, world"
		watchEffect(() => {
			console.log(shallow.value.greet)
		})
		// 这次变更不应触发副作用，因为这个 ref 是浅层的
		shallow.value.greet = 'Hello, universe'
		// 打印 "Hello, universe"
		triggerRef(shallow)`,
	},
	{
		api: 'customRef()',
		Description:
			'创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。customRef() 预期接收一个工厂函数作为参数，这个工厂函数接受 track 和 trigger 两个函数作为参数，并返回一个带有 get 和 set 方法的对象。一般来说，track() 应该在 get() 方法中调用，而 trigger() 应该在 set() 中调用。然而事实上，你对何时调用、是否应该调用他们有完全的控制权。',
		Different: '',
		Advantages: '',
		Code: `import { customRef } from 'vue'
						export function useDebouncedRef(value, delay = 200) {
					let timeout
					return customRef((track, trigger) => {
						return {
							get() {
								track()
								return value
							},
							set(newValue) {
								clearTimeout(timeout)
								timeout = setTimeout(() => {
									value = newValue
									trigger()
								}, delay)
							}
						}
					})
				}`,
	},
	{
		api: 'shallowReactive()',
		Description: 'reactive() 的浅层作用形式',
		Different:
			'这里没有深层级的转换：一个浅层响应式对象里只有根级别的属性是响应式的。属性的值会被原样存储和暴露，这也意味着值为 ref 的属性不会被自动解包',
		Advantages: '',
		Code: `const state = shallowReactive({foo: 1,nested: {bar: 2 }})
			// 更改状态自身的属性是响应式的
			state.foo++
			// ...但下层嵌套对象不会被转为响应式
			isReactive(state.nested) // false
				// 不是响应式的
				state.nested.bar++`,
	},
	{
		api: 'shallowReadonly()',
		Description: 'reactive() 的浅层作用形式',
		Different:
			'和 readonly() 不同，这里没有深层级的转换：只有根层级的属性变为了只读。属性的值都会被原样存储和暴露，这也意味着值为 ref 的属性不会被自动解包了。',
		Advantages: '',
		Code: `const state = shallowReadonly({foo: 1, nested: { bar: 2 }})
			// 更改状态自身的属性会失败
			state.foo++
			// ...但可以更改下层嵌套对象
			isReadonly(state.nested) // false
			// 这是可以通过的
			state.nested.bar++`,
	},
	{
		api: 'toRaw()',
		Description: 'reactive() 的浅层作用形式',
		Different:
			'和 readonly() 不同，这里没有深层级的转换：只有根层级的属性变为了只读。属性的值都会被原样存储和暴露，这也意味着值为 ref 的属性不会被自动解包了。',
		Advantages: '',
		Code: `const foo = {}
		const reactiveFoo = reactive(foo)
		console.log(toRaw(reactiveFoo) === foo) // true`,
	},
	{
		api: 'effectScope()',
		Description:
			'创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。对于该 API 的使用细节，请查阅对应的 RFC。',
		Different: '',
		Advantages: '',
		Code: `const scope = effectScope()
					scope.run(() => {
						const doubled = computed(() => counter.value * 2)
						watch(doubled, () => console.log(doubled.value))
						watchEffect(() => console.log('Count: ', doubled.value))
					})
					// 处理掉当前作用域内的所有 effect
					scope.stop()`,
	},
	{
		api: 'getCurrentScope()',
		Description: '如果有的话，返回当前活跃的 effect 作用域。',
		Different: '',
		Advantages: '',
		Code: ``,
	},
	{
		api: 'getCurrentScope()',
		Description:
			'在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。这个方法可以作为可复用的组合式函数中 onUnmounted 的替代品，它并不与组件耦合，因为每一个 Vue 组件的 setup() 函数也是在一个 effect 作用域中调用的。',
		Different: '',
		Advantages: '',
		Code: ``,
	},
]
interface User {
	api: string
	Description: string
	Code: string
	Different?: string
	Advantages?: string
}
const tableRowClassName = ({ row, rowIndex }: { row: User; rowIndex: number }) => {
	if (rowIndex === 1) {
		return 'warning-row'
	} else if (rowIndex === 3) {
		return 'success-row'
	}
	return ''
}
//
</script>
<style lang="scss" scoped></style>
