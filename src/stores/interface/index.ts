/* themeConfigProp */
export interface ThemeConfigProps {
	layout: string
	primary: string
	isDark: boolean
	isGrey: boolean
	isCollapse: boolean
	isWeak: boolean
	breadcrumb: boolean
	breadcrumbIcon: boolean
	tabs: boolean
	tabsIcon: boolean
	footer: boolean
	maximize: boolean
	isPhone: boolean
}

/* GlobalState */
export interface GlobalState {
	title: string
	token: string
	userInfo: any
	assemblySize: string
	language: string
	themeConfig: ThemeConfigProps
	isWatermark: boolean
	Watermark: string
}

/* tabsMenuProps */
export interface TabsMenuProps {
	icon: string
	title: string
	path: string
	close: boolean
}

/* TabsState */
export interface TabsState {
	tabsMenuList: TabsMenuProps[]
}

/* AuthState */
export interface AuthState {
	authButtonList: {
		[key: string]: {
			[key: string]: boolean
		}
	}
	// authMenuList: Menu.MenuOptions[];
	authMenuList: any[]

	routeName: string
}
