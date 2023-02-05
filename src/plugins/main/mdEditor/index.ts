import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// //使用的是vuepress主题
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// 高亮
import hljs from 'highlight.js';

VueMarkdownEditor.use(githubTheme, {
	Hljs: hljs,
});

export default VueMarkdownEditor;
