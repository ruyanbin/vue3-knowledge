const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const Icons = require('unplugin-icons/webpack');
const { FileSystemIconLoader } = require('unplugin-icons/loaders');
// 引入 Icon自动引入解析器
const IconsResolver = require('unplugin-icons/resolver');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const ElementPlus = require('unplugin-element-plus/webpack');
const Defineoptions = require('unplugin-vue-define-options/webpack');
// const { VueAmapResolver } = require('@vuemap/unplugin-resolver'); //高德地图

module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		plugins: [
			Defineoptions(),
			ElementPlus({
				// 样式丢失
				importStyle: 'sass',
				useSource: true,
			}),
			AutoImport({
				resolvers: [
					ElementPlusResolver({
						exclude: /^ElAmap[A-Z]*/,
					}),
					// VueAmapResolver(),
				],
				imports: [
					// presets
					'vue',
					'vue-router',
				],
			}),
			Components({
				resolvers: [
					ElementPlusResolver({
						exclude: /^ElAmap[A-Z]*/,
					}),
					// VueAmapResolver(),
					// Icon自动引入解析器
					IconsResolver({
						// 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
						prefix: 'icon',
						// 当图标集名字过长时，可使用集合别名
						alias: {
							system: 'system-uicons',
						},
						// 标识自定义图标集
						customCollections: ['home', 'about'],
					}),
				],
			}),
			Icons({
				compiler: 'vue3',
				autoInstall: true, // 自动安装
				customCollections: {
					home: FileSystemIconLoader('src/assets/svg/home', (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
					about: FileSystemIconLoader('src/assets/svg/about', (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
				},
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
			},
		},
		externals: {},
		// server: {
		//   // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
		//   host: "0.0.0.0",
		//   cors: true,
		//   // 跨域代理配置
		//   proxy: {
		//     "/api": {
		//       target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
		//       // target: "http://localhost:8080", // easymock

		//       // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
		//       changeOrigin: true,
		//       rewrite: (path) => path.replace(/^\/api/, ""),
		//     },
		//   },
		// },
	},
});
