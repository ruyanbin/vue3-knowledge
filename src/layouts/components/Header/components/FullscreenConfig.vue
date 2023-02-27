<template>
	<div class="fullscreen">
		<el-icon size="22" @click="toggle">
			<IconTwotoneZoomOutMap v-show="!isFullscreen" />
			<IconTwotoneZoomInMap v-show="isFullscreen" />
		</el-icon>
	</div>
</template>

<script lang="ts" setup>
import IconTwotoneZoomOutMap from '~icons/ic/twotone-zoom-out-map'
import IconTwotoneZoomInMap from '~icons/ic/twotone-zoom-in-map'

import { useFullscreen } from '@vueuse/core'
const { toggle, isFullscreen } = useFullscreen()
</script>
<style lang="scss" scoped>
.fullscreen {
	display: flex;
}
</style>
