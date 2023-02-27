import {
	DefineComponent,
	ComputedOptions,
	MethodOptions,
	ComponentOptionsMixin,
	VNodeProps,
	AllowedComponentProps,
	ComponentCustomProps,
	ExtractPropTypes,
} from 'vue'

export const withInstall = (component: any) => {
	component.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
		Vue.component(component.name, component)
	}
	return component
}
