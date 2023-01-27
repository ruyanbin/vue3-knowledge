<template>
	<div class="card">
		<div ref="el">
			应该在组件的 setup() 阶段被同步调用<br />
			<el-button id="count" @click="count++">{{ count }}</el-button>
		</div>
		<el-table border :data="tableData" height="80vh" :row-class-name="tableRowClassName" stripe style="width: 100%">
			<!-- show-overflow-tooltip overflow-tooltip	当内容过长被隐藏时显示 tooltip-->
			<el-table-column prop="api" label="api名称" width="100" />
			<el-table-column prop="Description" label="描述" show-overflow-tooltip />
			<el-table-column prop="type" label="类型" show-overflow-tooltip />
			<el-table-column prop="detail" label="详细信息" show-overflow-tooltip />
			<el-table-column prop="Warning" label="警告" show-overflow-tooltip />

			<el-table-column prop="Code" label="示例" />
		</el-table>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const tableData = [
	{
		api: 'onMounted()',
		Description: '注册一个回调函数，在组件挂载完成后执行',
		type: 'function onMounted(callback: () => void): void',
		detail:
			'组件在以下情况下被视为已挂载：其所有同步子组件都已经被挂载 (不包含异步组件或 <Suspense> 树内的组件)。其自身的 DOM 树已经创建完成并插入了父容器中。注意仅当根容器在文档中时，才可以保证组件 DOM 树也在文档中。这个钩子通常用于执行需要访问组件所渲染的 DOM 树相关的副作用，或是在服务端渲染应用中用于确保 DOM 相关代码仅在客户端执行。这个钩子在服务器端渲染期间不会被调用。',
		Code: `import { ref, onMounted } from 'vue'const el = ref()onMounted(() => {el.value })`,
	},
	{
		api: 'onUpdated()',
		Description: '注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。',
		type: 'function onUpdated(callback: () => void): void',
		detail:
			'父组件的更新钩子将在其子组件的更新钩子之后调用。这个钩子会在组件的任意 DOM 更新后被调用，这些更新可能是由不同的状态变更导致的。如果你需要在某个特定的状态更改后访问更新后的 DOM，请使用 nextTick() 作为替代。这个钩子在服务器端渲染期间不会被调用。',
		Code: `import { ref, onUpdated } from 'vue'const count = ref(0)
						onUpdated(() => {
							// 文本内容应该与当前的count.value 一致
							console.log(document.getElementById('count').textContent)
						})`,
		Warning: `不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！`,
	},
	{
		api: 'onUnmounted()',
		Description: '注册一个回调函数，在组件实例销毁之后调用',
		type: 'function onUnmounted(callback: () => void): void',
		detail: `一个组件在以下情况下被视为已卸载：其所有子组件都已经被卸载。所有相关的响应式作用 (渲染作用以及 setup() 时创建的计算属性和侦听器) 都已经停止。可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接。
			这个钩子在服务器端渲染期间不会被调用。`,
		Warning: ``,
		Code: `import { onMounted, onUnmounted } from 'vue'let intervalId
				onMounted(() => {intervalId = setInterval(() => {})})
				onUnmounted(() => clearInterval(intervalId))`,
	},
	{
		api: 'onBeforeMount()',
		Description: '注册一个钩子，在组件被挂载之前被调用。',
		type: 'function onBeforeMount(callback: () => void): void void',
		detail: `当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。
			这个钩子在服务器端渲染期间不会被调用。`,
		Warning: ``,
		Code: ``,
	},
	{
		api: 'onBeforeUpdate()',
		Description: '注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。',
		type: 'function onBeforeUpdate(callback: () => void): void void',
		detail: `这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。在这个钩子中更改状态也是安全的。
			这个钩子在服务器端渲染期间不会被调用。`,
		Warning: ``,
		Code: ``,
	},
	{
		api: 'onBeforeUnmount()',
		Description: '注册一个钩子，在组件实例被卸载之前调用。',
		type: 'function onBeforeUnmount(callback: () => void): void void',
		detail: `当这个钩子被调用时，组件实例依然还保有全部的功能 这个钩子在服务器端渲染期间不会被调用。`,
		Warning: ``,
		Code: ``,
	},
	{
		api: 'onErrorCaptured()',
		Description: '注册一个钩子，在捕获了后代组件传递的错误时调用。',
		type: 'function onErrorCaptured(callback: ErrorCapturedHook): void ;type ErrorCapturedHook = (err: unknown,instance: ComponentPublicInstance | null,info: string) => boolean | void',
		detail: `这个钩子带有三个实参：错误对象、触发该错误的组件实例，以及一个说明错误来源类型的信息字符串。
		  默认情况下，所有的错误都会被发送到应用级的 app.config.errorHandler (前提是这个函数已经定义)，这样这些错误都能在一个统一的地方报告给分析服务。 `,
		Warning: ``,
		Code: ``,
	},
	{
		api: 'onActivated()',
		Description:
			'注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用。这个钩子在服务器端渲染期间不会被调用',
		type: 'function onActivated(callback: () => void): void',
		detail: ` `,
		Warning: ``,
		Code: ``,
	},
	{
		api: 'onDeactivated()',
		Description:
			'注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用。这个钩子在服务器端渲染期间不会被调用',
		type: 'function onDeactivated(callback: () => void): void',
		detail: ` `,
		Warning: ``,
		Code: ``,
	},
	{
		api: 'onServerPrefetch()ssr',
		Description: '注册一个异步函数，在组件实例在服务器上被渲染之前调用。',
		type: 'function onServerPrefetch(callback: () => Promise<any>): void',
		detail: ` 如果这个钩子返回了一个 Promise，服务端渲染会在渲染该组件前等待该 Promise 完成。
这个钩子仅会在服务端渲染中执行，可以用于执行一些仅存在于服务端的数据抓取过程。`,
		Warning: ``,
		Code: `const data = ref(null)
					onServerPrefetch(async () => {
						// 组件作为初始请求的一部分被渲染
						// 在服务器上预抓取数据，因为它比在客户端上更快。
						data.value = await fetchOnServer(/* ... */)
					})
					onMounted(async () => {
						if (!data.value) {
							// 如果数据在挂载时为空值，这意味着该组件
							// 是在客户端动态渲染的。将转而执行
							// 另一个客户端侧的抓取请求
							data.value = await fetchOnClient(/* ... */)
						}`,
	},
];
interface User {
	api: string;
	Description: string;
	type?: string;
	detail: string;
	Code: string;
	Warning?: string;
}
const tableRowClassName = ({ row, rowIndex }: { row: User; rowIndex: number }) => {
	if (rowIndex === 1) {
		return 'warning-row';
	} else if (rowIndex === 3) {
		return 'success-row';
	}
	return '';
};
const count = ref(0);

//onBeforeMount()
onBeforeMount(() => {
	console.log('onBeforeMount');
});
// onMounted
const el = ref();
let intervalId: number | undefined;
onMounted(() => {
	el.value; // <div>
	console.log(el.value, 'onMounted');
	intervalId = setInterval(() => {
		// ...
	});
});
//onUpdated
onUpdated(() => {
	console.log('onUpdated');
	// 文本内容应该与当前的 `count.value` 一致
	console.log(document.getElementById('count').textContent);
});
onUnmounted(() => {
	console.log('onUnmounted');
	clearInterval(intervalId);
});
</script>
<style lang="scss" scoped></style>
