<template>
	<div id="twomapcontainer"></div>
</template>

<script lang="ts" setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, reactive, ref, shallowRef } from 'vue'
const map: any = shallowRef(null)

const initMap = () => {
	AMapLoader.load({
		key: '0c93577f3a72d04f9bd2130824983cb2', // 申请好的Web端Key，首次调用 load 时必填
		version: '2.0',
		plugins: ['AMap.ToolBar', 'AMap.Marker', 'AMap.Scale', 'AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.Geocoder'],
	}).then((AMap) => {
		// 图层
		const layer = new AMap.TileLayer({
			zooms: [3, 20], //可见级别
			visible: true, //是否可见
			opacity: 1, //透明度
			zIndex: 0, //叠加层级
		})
		map.value = new AMap.Map('twomapcontainer', {
			//设置地图容器id
			viewMode: '2d', //是否为3D地图模式
			zoom: 15, //初始化地图级别
			layers: [layer],
			// center: [105.602725, 37.076636], //初始化地图中心点位置
		})
	})
}

//------------
onMounted(() => {
	initMap()
})
</script>
<style lang="scss" scoped>
#twomapcontainer {
	width: 100%;
	height: 100%;
}
</style>
