import { Directive, type DirectiveBinding, type VNode } from 'vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import type { Erd } from 'element-resize-detector';
import { emitter } from '@/utils/mittBus';

const erd: any = elementResizeDetectorMaker({
	strategy: 'scroll',
});

export const resize: Directive = {
	mounted(el: HTMLElement, binding?: DirectiveBinding, vnode?: VNode) {
		erd.listenTo(el, (elem: { offsetWidth: any; offsetHeight: any }) => {
			const width = elem.offsetWidth;
			const height = elem.offsetHeight;
			if (binding?.instance) {
				emitter.emit('resize', { detail: { width, height } });
			} else {
				if (vnode && vnode.el) {
					vnode.el.dispatchEvent(new CustomEvent('resize', { detail: { width, height } }));
				}
			}
		});
	},
	unmounted(el: HTMLElement) {
		erd.uninstall(el);
	},
};
