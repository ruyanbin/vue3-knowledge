// 首先引入Mock
const Mock = require("mockjs");

let configArray: any[] = [];
Mock.setup({
	timeout: "200-600"
});
// 使用webpack的require.context()遍历所有mock文件
const files = require.context("./modules/", true, /\.ts$/);
files.keys().forEach(key => {
	if (key === "./index.js") return;
	configArray = configArray.concat(files(key).default);
});

// / 注册所有的mock服务
configArray.forEach(item => {
	for (const [path, target] of Object.entries(item)) {
		const protocol = path.split("|");
		Mock.mock(new RegExp("^" + protocol[1]), protocol[0], target);
	}
});
console.log(configArray, "mock-------configArray");
export default configArray;
