<template>
	<div class="card content-box">
		<span class="text">้ฒๆๆไปค ๐๐๐๐๐๐</span>
		<el-button type="primary" v-debounce="debounceClick">้ฒๆๆ้ฎ (0.5็งๅๆง่ก)</el-button>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
const debounceClick = () => {
	ElMessage.success('ๆๆฏ้ฒๆๆ้ฎ่งฆๅ็ไบไปถ ๐๐๐')
}
</script>

<style scoped lang="scss"></style>
