<template>
	<div class="card">
		<el-table border :data="tableData" height="80vh" :row-class-name="tableRowClassName" stripe style="width: 100%">
			<!-- show-overflow-tooltip overflow-tooltip	当内容过长被隐藏时显示 tooltip-->
			<el-table-column prop="api" label="api名称" width="100" />
			<el-table-column prop="Description" label="描述" show-overflow-tooltip />
			<el-table-column prop="type" label="类型" show-overflow-tooltip />

			<el-table-column prop="Code" label="代码" />
		</el-table>
	</div>
</template>

<script lang="ts" setup>
import { ChatLineRound } from '@element-plus/icons-vue'
import { isRef, reactive, readonly, Ref, toRef, toRefs, unref } from 'vue'

const tableData = [
	{
		api: 'isRef()',
		Description: '检查某个值是否为 ref,返回值是一个类型判定 (type predicate)，这意味着 isRef 可以被用作类型守卫',
		type: 'function isRef<T>(r: Ref<T> | unknown): r is Ref<T>',
		Code: `let foo: unknown if (isRef(foo)) {
  // foo 的类型被收窄为了 Ref<unknown>
  foo.value
}`,
	},
	{
		api: 'unref()',
		Description: '如果参数是 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖。',
		type: 'function unref<T>(ref: T | Ref<T>): T',
		Code: `function useFoo(x: number | Ref<number>) {
  const unwrapped = unref(x)
  // unwrapped 现在保证为 number 类型
}`,
	},
	{
		api: 'toRef()',
		Description: '如果参数是 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖。',
		type: 'function toRef<T extends object, K extends keyof T>(object: T,key: K,defaultValue?: T[K]): ToRef<T[K]>type ToRef<T> = T extends Ref ? T : Ref<T>',
		Code: `const state = reactive({foo: 1,bar: 2})
			const fooRef = toRef(state, 'foo')
				// 更改该 ref 会更新源属性
				fooRef.value++
				console.log(state.foo) // 2
				// 更改源属性也会更新该 ref
				state.foo++
				console.log(fooRef.value) // 	`,
	},
	{
		api: 'toRefs()',
		Description:
			'将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。',
		type: `function toRefs<T extends object>(object: T): {[K in keyof T]: ToRef<T[K]>}
						type ToRef = T extends Ref ? T : Ref<T>`,
		Code: `const state = reactive({ foo: 1,bar: 2})
	const stateAsRefs = toRefs(state)
		/*
		stateAsRefs 的类型：{foo: Ref<number>, bar: Ref<number>}
		*/

		// 这个 ref 和源属性已经“链接上了”
		state.foo++
		console.log(stateAsRefs.foo.value) // 2

		stateAsRefs.foo.value++
		console.log(state.foo) // 3	`,
	},
	{
		api: 'isProxy()',
		Description: '检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理。',
		type: 'function isProxy(value: unknown): boolean',
		Code: `function isProxy(value: unknown): boolean`,
	},
	{
		api: 'isReactive()',
		Description: '检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。',
		type: 'function isReactive(value: unknown): boolean',
		Code: `function isReactive(value: unknown): boolean`,
	},
	{
		api: 'isReadonly()',
		Description: '检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。',
		type: 'function isReadonly(value: unknown): boolean',
		Code: `检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。<br/>
			通过 readonly() 和 shallowReadonly() 创建的代理都是只读的，因为他们是没有 set 函数的 computed() ref。`,
	},
]
interface User {
	api: string
	Description: string
	Code: string
	type?: string
}
const tableRowClassName = ({ row, rowIndex }: { row: User; rowIndex: number }) => {
	if (rowIndex === 1) {
		return 'warning-row'
	} else if (rowIndex === 3) {
		return 'success-row'
	}
	return ''
}
// isRef()
let foo: unknown
console.log(isRef(foo), 'isRef---类型判断')
if (isRef(foo)) {
	// foo 的类型被收窄为了 Ref<unknown>
	foo.value
}
//unref()
function useFoo(x: number | Ref<number>) {
	const unwrapped = unref(x)
	console.log(unwrapped, 'unwrapped-------unref')
	// unwrapped 现在保证为 number 类型
}
useFoo(1)
//toRef
console.log('toRef')
const state = reactive({ foo: 1, bar: 2 })
const fooRef = toRef(state, 'foo')
// 更改该 ref 会更新源属性
fooRef.value++
console.log(state.foo) // 2
// 更改源属性也会更新该 ref
state.foo++
console.log(fooRef.value) //
// torefs
console.log('toRefs')
const states = reactive({
	foo: 1,
	bar: 2,
})

const stateAsRefs = toRefs(states)
// 这个 ref 和源属性已经“链接上了”
states.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3
// isProxy()
console.log('isProxy') // 3
const a = ref(1)
const b = reactive({
	a: 1,
})
console.log(isProxy(a), 'ref-------isProxy')
console.log(isProxy(b), 'reactive-------isProxy')
console.log('isReactive')
console.log(isReactive(b), 'reactive-------isReactive')
console.log(isReactive(a), 'ref-------isReactive')
//isReadonly
const c = readonly({
	a: 222,
})
console.log(isReadonly(c), 'isReadonly----readonly')
console.log(isReadonly(a), 'isReadonly----ref')
</script>
<style lang="scss" scoped>
.el-table .warning-row {
	--el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
	--el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
