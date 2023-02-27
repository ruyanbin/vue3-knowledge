<template>
	<el-card class="overflow-auto">
		<template #header>
			<div class="card-header">
				<span class="font-medium">单例模式</span>
			</div>
		</template>
		<v-md-editor :model-value="Example" mode="preview"></v-md-editor>
		<v-md-editor :model-value="text" mode="preview"></v-md-editor>
		<v-md-editor :model-value="Features" mode="preview"></v-md-editor>
		<v-md-editor :model-value="Expand" mode="preview"></v-md-editor>
	</el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const Example = `

    // js手写单例设计模式
    var Singleton = (function(){
        var instance = null;
        function Singleton(name){
            this.name = name;
        }
        return function(name){
            if(!instance){
                instance = new Singleton(name);
            }
            return instance;
        }
    })()
    var a = new Singleton("张三");
    var b = new Singleton("李四");
    console.log(a.name);
    console.log(b.name);

`;

const text = ref(`::: tip 说明：
涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一对象的方式，可以直接访问，不需要实例化该类的对象
:::
`);
const Features = ref(`::: tip 特点:
单例类只能有一个实例。
单例类必须自己创建自己的唯一实例。
单例类必须给所有其他对象提供这一实例。
:::
`);
const Expand = ref(`::: tip 拓展：改变单例模式的一个实例对象的属性值，其所有的实例对象的属性值都变:
对象的浅拷贝，拷贝的仅仅是“引用地址”，不是值。所以，无论改变哪个对象的值，另一个对象对应的值也会改变。
对象的深拷贝，把引用地址和值一起拷贝过来，一个对象的值改变，另一个对象的值不受影响。
:::
`);
</script>
<style lang="scss" scoped></style>
