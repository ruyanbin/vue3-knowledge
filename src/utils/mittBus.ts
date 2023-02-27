import mitt from 'mitt'
import type { Emitter } from 'mitt'
const mittBus = mitt()
type Events = {
	resize: {
		detail: {
			width: number
			height: number
		}
	}
	openPanel: string
	tagViewsChange: string
	tagViewsShowModel: string
	logoChange: boolean
	changLayoutRoute: {
		indexPath: string
		parentPath: string
	}
}
export const emitter: Emitter<Events> = mitt<Events>()
export default mittBus
