import axios from 'axios'
import { changeGlobalNodesTarget } from 'element-plus/es/utils'

class CancelToken {
	// 声明一个map 用于存储每个请求的标识
	static pending = new Map()
	// 白名单
	static whiteRequest: string[] = []

	/* 
	得到改格式的url
	@param {AxiosReequestConfig} config
	@return
	 */
	static getUrl(config: { method?: any; url: any }) {
		return [config.method, config.url].join('&')
	}
	/* 
	添加请求
	@param {axiosRequestconfig} config

	 */
	static addPending(config: any) {
		const url = this.getUrl(config)
		config.CancelToken = new axios.CancelToken((cancel) => {
			if (!this.pending.has(url)) {
				// 如果pending 中不存在当前请求，则添加进去
				this.pending.set(url, cancel)
				console.log(this.pending, 'pending')
			}
		})
	}
	/* 
	移除请求
	@param {axiosRequestconfig} config
	*/
	static removePending(config: { method?: any; url: any }) {
		const url = this.getUrl(config)
		const method = url.split('&')[1]
		const is = this.whiteRequest.indexOf(method) // 请求方式 是否在白名单中
		if (this.pending.has(url) && is == -1) {
			// 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
			const cancel = this.pending.get(url)
			cancel(url)
			this.pending.delete(url)
		}
	}
	/* 
	 清空 pending 中的请求 
	*/
	static clearPending() {
		for (const [url, cancel] of this.pending) {
			cancel(url)
		}
		this.pending.clear()
	}
}

export default CancelToken
