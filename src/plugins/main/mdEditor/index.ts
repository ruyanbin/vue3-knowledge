import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// 复制
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
// //使用的是vuepress主题
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// 高亮
import Prism from 'prismjs';
VueMarkdownEditor.use(vuepressTheme, createCopyCodePlugin(), {
	// Hljs: hljs,
	Prism,
	extend() {},
});

export default VueMarkdownEditor;
