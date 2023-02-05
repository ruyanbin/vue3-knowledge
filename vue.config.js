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
// vite 使用 unplugin-vue-macros
const Defineoptions = require('unplugin-vue-define-options/webpack');

// const { VueAmapResolver } = require('@vuemap/unplugin-resolver'); //高德地图
// 打包优化
// npm run build 自动设置process.env.NODE_ENV => 'production'
// npm run serve 则会设置为devlopment
const isProduction = process.env.NODE_ENV === 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let externals = {};
// 项目依赖插件
const plugins = [
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
];
// 生产打包新增插件
const isProductionPluginsList = [
	new BundleAnalyzerPlugin({
		analyzerMode: 'static', //可选值有server static disabled
		generateStatsFile: false,
		statsOptions: { source: false },
		openAnalyzer: false,
	}),
	new UglifyJsPlugin({
		uglifyOptions: {
			output: {
				comments: false, // 去除注释
			},
			warnings: false, // 去除黄色警告,
			compress: {
				drop_console: true,
				drop_debugger: false, // 特定情况需要利用debugger防止调试
				pure_funcs: ['console.log'], // 移除console.log 避免console.error
			},
		},
	}),
	new CompressionWebpackPlugin({
		test: /\.(js|json|css)$/i, // 图片一般不Gzip压缩 webpack-image-loader
		threshold: 10240, // 只有在10kb以上才压缩
	}),
];
// 如果是生产环境
if (isProduction) {
	// 压缩 混淆 取出注释 去除console
	plugins.push(...isProductionPluginsList);

	externals = {
		// from后的 : 使用全局暴露的对象名,具体看包暴露哪个
		// vue: vue,
		// 'vue-router': VueRouter,
		// // pinia: pinia,
		// axios: 'axios',
	};
}
module.exports = defineConfig({
	transpileDependencies: true,
	productionSourceMap: !isProduction,
	configureWebpack: {
		plugins,
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
			},
		},
		externals,
	},
});
