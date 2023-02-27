<template>
	<div class="card content-box">
		<span class="text">富文本编辑器 🍓🍇🍈🍉</span>
		<WangEditor height="400px" v-model:value="content" />
		<h2>内容预览</h2>
		<div v-html="content"></div>
		<el-descriptions title="配置项 📚" :column="1" border>
			<el-descriptions-item label="value"> 双向绑定的 value 值，使用示例： v-model:value="content"> </el-descriptions-item>
			<el-descriptions-item label="toolbarConfig">
				富文本 ToolBar区域 配置：
				<a href="https://www.wangeditor.com/v5/toolbar-config.html"> https://www.wangeditor.com/v5/toolbar-config.html </a>
			</el-descriptions-item>
			<el-descriptions-item label="editorConfig">
				富文本 编辑区域 配置：
				<a href="https://www.wangeditor.com/v5/editor-config.html"> https://www.wangeditor.com/v5/editor-config.html </a>
			</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import WangEditor from '@/components/WangEditor/index.vue'

const content = ref('')
</script>
<style lang="scss" scoped></style>
