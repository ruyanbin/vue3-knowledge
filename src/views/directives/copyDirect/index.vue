<template>
	<div class="card content-box">
		<span class="text">ๅคๅถๆไปค ๐๐๐๐๐๐</span>
		<div class="box-content">
			<el-input placeholder="่ฏท่พๅฅๅๅฎน" v-model="data" style="width: 500px">
				<template #append>
					<el-button v-copy="data">ๅคๅถ</el-button>
				</template>
			</el-input>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref<string>('ๆๆฏ่ขซๅคๅถ็ๅๅฎน ๐ ๐ ๐')
</script>

<style scoped lang="scss"></style>
