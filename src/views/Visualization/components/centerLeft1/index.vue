<template>
	<div class="centreLeft1">
		.<div class="bg-color-black">
			<div class="d-flex pt-2 pl-2">
				<span>
					<i class="iconfont icon-vector" />
				</span>
				<div class="d-flex">
					<span class="fs-xl text mx-2">任务通过率</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang='ts' >
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue'

export default defineComponent({
	name: "CenterLeft1",
	setup() {

	}
})
</script>
<style lang='scss' scoped>
$box-width: 300px;
$box-height: 410px;

//flex
.d-flex {
	display: flex;
	font-size: 3.2px;
}

.centreLeft1 {
	padding: 16px;
	height: $box-height;
	width: $box-width;
	border-radius: 10px;

	.bg-color-black {
		height: $box-height - 30px;
		border-radius: 10px;
	}

	.text {
		color: #c3cbde;
	}

	.dv-dec-3 {
		position: relative;
		width: 100px;
		height: 20px;
		top: -3px;
	}
}
</style>