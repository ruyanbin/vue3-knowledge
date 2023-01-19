<template>
	<div>
		<div class="card">1.路由切换 页面丢失；解答： vue3支持多个根元素，但过渡效果只支持一个根元素</div>
		<div class="card">
			<div>2.路由跳转 以及传参 ；</div>
			<div>
				解答：
				<p>
					1.利用router-link标签来进行跳转。
					<br />
					{{ str }} <br />
					这里判定to,然后采用name来跳转到指定页面。name值是你在路由配置中的name属性。 <br />
					{{ str1 }}
				</p>
				<p>
					1.函数进行跳转。
					<br />
					{{ query1 }} <br />
					{{ query2 }}<br />
					{{ params1 }}
				</p>
			</div>
		</div>
		<div class="card">
			<div>3.组件间传参</div>
			<div>
				解答：
				<p>
					1.<b>父子组件传参</b><br />
					1.1在父组件中的组件中子组件添加属性<br />
					1.2子组件通过emit/props 接受收属性<br />
					例如：const props = defineProps({ num: Number, modelValue: { type: String, required: true, }, }); const emits =
					defineEmits(['update:modelValue']);通过defineExpose 调用子组件方法
					<br />
					1.3如果子组件没有在props组件中进行声明属性， <br />在template 中使用可以通过$attrs.属性名称 进行调用 <br />
					在script 中如果想使用attrs 可以通过 useAtters 函数进行使用 <br />
					例如：const attrs = useAttrs(); const attrClick = () => { attrs.onAclick(); };
					<br />
					1.4使用v-model使用<br />
					默认绑定的属性名为：modelValue v-model<br />
					默认绑定的事件名为：update:modelValue<br />
					当自定义组件使用多个v-model时可以这样写例如：<br />
					父组件中: {{ childrentwo }}<br />
					子组件：const props = defineProps({ title: { type: String, required: true, }, str: { type: String, required: true, },
					}); const emits = defineEmits(['update:title', 'update:str']); 2.<b>祖孙组件传参 </b>使用provide('msg', 'msg');和inject
					进行祖孙组件之间的传参 当接受的参数为函数时要写成 inject("refresh", Function, true); <br />
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const str = ref('<router-link to="/index">22</router-link>');

const str1 = ref(`<router-link  :to="{name:'/index',params:'我的'}">22</router-link>`);

const query1 = ref(`router.push({ name: 'guest', query: { id: 1 } });
`);
const query2 = ref(`router.push({ path: 'guest', query: { id: 1 } });
`);
const params1 = ref(`router.push({ name: 'guest', params: { id: 1 } });
;`);
const childrentwo = ref(`<childrentwo v-model:title="title" v-model:str="str"></childrentwo>`);
</script>
<style lang="scss" scoped></style>
