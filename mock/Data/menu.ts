export const list = [
	// 首页
  {
    component: "/home/index",
    name: "home",
    path: "/home/index",
    meta: {
      icon: "HomeFilled",
      isAffix: true,
      isFull: false,
      isHide: false,
      isKeepAlive: true,
      isLink: "",
      title: "首页"
    }
  },
	// 可视化
	// {
	// 	"path": "/Visualization",
	// 	"name": "Visualization",
	// 	"component": "/Visualization/index",
	// 	"meta": {
	// 		"icon": "Histogram",
	// 		"title": "数据大屏",
	// 		"isLink": "",
	// 		"isHide": false,
	// 		"isFull": true,
	// 		"isAffix": false,
	// 		"isKeepAlive": true
	// 	}
	// },
	//  layout
	 {
	  path:"/layout",
    name: "layout",
    meta: {
      icon: "TrendCharts",
      title: "layout",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
			{
				name: "grid",
        component: "/layout/grid",
        path: "/layout/grid",
        meta: {
          icon: "Menu",
          title: "grid布局",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
      },
			{
				name: "flex",
        component: "/layout/flex",
        path: "/layout/flex",
        meta: {
          icon: "Menu",
          title: "弹性盒布局",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
      },
				 {
				name: "BFC",
        component: "/layout/BFC",
        path: "/layout/BFC",
        meta: {
          icon: "Menu",
          title: "BFC",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
      },
    ]
  },
		//  设计模式
	 {
	  path:"/Design",
    name: "Design",
    meta: {
      icon: "TrendCharts",
      title: "设计模式",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
			{
				name: "markdown",
        component: "/Design/markdown",
        path: "/Design/markdown",
        meta: {
          icon: "Menu",
          title: "markdown编辑器",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
      },
			{
				name: "Factory",
        component: "/Design/Factory",
        path: "/Design/Factory",
        meta: {
          icon: "Menu",
          title: "工厂模式",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
      },
			{
				name: "Structure",
        component: "/Design/Structure",
        path: "/Design/Structure",
        meta: {
          icon: "Menu",
          title: "构造函数模式",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
			},
			{
				name: "prototype",
        component: "/Design/prototype",
        path: "/Design/prototype",
        meta: {
          icon: "Menu",
      		title: "原型模式",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
			},
	    { 
				name: "prototypenew",
        component: "/Design/prototypenew",
        path: "/Design/prototypenew",
        meta: {
          icon: "Menu",
          title: "构造函数+原型的js混合模式（推荐）",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
			},
			{ 
				name: "Dynamic",
        component: "/Design/Dynamic",
        path: "/Design/Dynamic",
        meta: {
          icon: "Menu",
          title: "构造函数+原型的动态原型模式",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
			},
			{ 
				name: "Single",
        component: "/Design/Single",
        path: "/Design/Single",
        meta: {
          icon: "Menu",
          title: "单例模式",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
			},
			{ 
				name: "PublishSubscribe",
        component: "/Design/PublishSubscribe",
        path: "/Design/PublishSubscribe",
        meta: {
          icon: "Menu",
          title: "发布订阅者模式",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
			},
			
    ]
  },
	//  vue api
	 {
    path: "/vue",
    name: "vue",
    meta: {
      icon: "TrendCharts",
      title: "vue api",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
			 {path:"",
        name: "setup",
        meta: {
          icon: "Menu",
          title: "组合式 API",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: false
        },
				children:[
		  		{
            path: "/CombinedApi/Core",
            name: "Core",
            component: "/vueapi/CombinedApi/Core",
            meta: {
              icon: "Menu",
              title: "核心",
              isLink: "",
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
					{
					path: "/setup",
					name: "setup",
					component: "/vueapi/CombinedApi/setup",
						meta: {
							icon: "Menu",
							title: "setup",
							isLink: "",
							isHide: false,
							isFull: false,
							isAffix: false,
							isKeepAlive: true
						}
					},
					{
						path: "/Tools",
						name: "Tools",
						component: "/vueapi/CombinedApi/Tools",
						meta: {
							icon: "Menu",
							title: "工具",
							isLink: "",
							isHide: false,
							isFull: false,
							isAffix: false,
							isKeepAlive: true
						}
					},
					{
						path: "/Advanced",
						name: "Advanced",
						component: "/vueapi/CombinedApi/Advanced",
						meta: {
							icon: "Menu",
							title: "进阶",
							isLink: "",
							isHide: false,
							isFull: false,
							isAffix: false,
							isKeepAlive: true
						}
					},
					{
						path: "/Life",
						name: "Life",
						component: "/vueapi/CombinedApi/Life",
						meta: {
							icon: "Menu",
							title: "生命周期",
							isLink: "",
							isHide: false,
							isFull: false,
							isAffix: false,
							isKeepAlive: false
						}
					},
				]
      },
		
      {
        path: "/vueapiIndex",
        name: "vueapiIndex",
        component: "/vueapi/index",
        meta: {
          icon: "Menu",
          title: "vue api 测试",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
  	 {
        path: "/routerParameter",
        name: "routerParameter",
        component: "/vueapi/routerParameter",
        meta: {
          icon: "Menu",
          title: "vue 路由传参",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
			{
        path: "/vuedetail",
        name: "vuedetail",
        component: "/vueapi/vuedetail",
        meta: {
          icon: "Menu",
          title: "vue 详情",
          isLink: "",
          isHide: true,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
				{
        path: "/params/:id",
        name: "params",
        component: "/vueapi/params",
        meta: {
          icon: "Menu",
          title: "vue-params 详情",
          isLink: "",
          isHide: true,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        },
			},
			{
        path: "/transfer/component",
        name: "transfercomponent",
        component: "/vueapi/component/index",
        meta: {
          icon: "Menu",
          title: "组件传参",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
    ]
  },
	// table
  {
    name: "proTable",
    path: "/proTable",
    meta: {
      icon: "MessageBox",
      isAffix: false,
      isFull: false,
      isHide: false,
      isKeepAlive: true,
      isLink: "",
      title: "超级表格"
    },
    children: [
      {
        name: "useTreeFilter",
        component: "/proTable/useTreeFilter/index",
        path: "/proTable/useTreeFilter/index",
        meta: {
          icon: "Menu",
          isAffix: false,
          isFull: false,
          isHide: false,
          isKeepAlive: true,
          isLink: "",
          title: "使用 TreeFilter"
        }
      }
    ]
  },
	//系统管理
  {
    name: "sys",
    path: "/sys",
    meta: {
      icon: "MessageBox",
      isAffix: false,
      isFull: false,
      isHide: false,
      isKeepAlive: true,
      isLink: "",
      title: "系统管理"
    },
    children: [
      {
        name: "Account",
        component: "/sys/Account/index",
        path: "/sys/Account/index",
        meta: {
          icon: "Menu",
          isAffix: false,
          isFull: false,
          isHide: false,
          isKeepAlive: false,
          isLink: "",
          title: "账号管理"
        }
      },
      {
        name: "Role",
        component: "/sys/Role/index",
        path: "/sys/Role/index",
        meta: {
          icon: "Menu",
          isAffix: false,
          isFull: false,
          isHide: false,
          isKeepAlive: true,
          isLink: "",
          title: "角色管理"
        }
      },
      {
        name: "Menu",
        component: "/sys/Menu/index",
        path: "/sys/Menu/index",
        meta: {
          icon: "Menu",
          isAffix: false,
          isFull: false,
          isHide: false,
          isKeepAlive: true,
          isLink: "",
          title: "菜单管理"
        }
      }
    ]
  },
	// from
  {
    path: "/From",
    name: "From",
    redirect: "/From/index",
    meta: {
      icon: "Tickets",
      title: "表单 Form",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
      {
        name: "Fromindex",
        component: "/From/index",
        path: "/From/index",
        meta: {
          icon: "Menu",
          title: "超级 Form",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      }
    ]
  },
	// 组件
  {
    path: "/assembly",
    name: "assembly",
    redirect: "/assembly/guide",
    meta: {
      icon: "Briefcase",
      title: "常用组件",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
			
				{
        path: "/assembly/countTo",
        name: "countTo",
        component: "/assembly/countTo/index",
        meta: {
          icon: "Menu",
          title: "数字动画",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
	
			{
        path: "/assembly/TypeIt",
        name: "TypeIt",
        component: "/assembly/TypeIt/index",
        meta: {
          icon: "Menu",
          title: "打字机组件",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
			{
        path: "/assembly/SeamlessScroll",
        name: "SeamlessScroll",
        component: "/assembly/SeamlessScroll/index",
        meta: {
          icon: "Menu",
          title: "无缝滚动组件",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
			{
        path: "/assembly/splitPane",
        name: "splitPane",
        component: "/assembly/splitPane/index",
        meta: {
          icon: "Menu",
          title: "切割面板",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/assembly/guide",
        name: "guide",
        component: "/assembly/guide/index",
        meta: {
          icon: "Menu",
          title: "引导页",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/assembly/selectIcon",
        name: "selectIcon",
        component: "/assembly/selectIcon/index",
        meta: {
          icon: "Menu",
          title: "图标选择器",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/assembly/wangEditor",
        name: "wangEditor",
        component: "/assembly/wangEditor/index",
        meta: {
          icon: "Menu",
          title: "富文本编辑器",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/assembly/treeFilter",
        name: "treeFilter",
        component: "/assembly/treeFilter/index",
        meta: {
          icon: "Menu",
          title: "树形筛选器",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/assembly/draggable",
        name: "draggable",
        component: "/assembly/draggable/index",
        meta: {
          icon: "Menu",
          title: "拖拽组件",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      }
    ]
  },
	// 指令
  {
    path: "/directives",
    name: "directives",
    redirect: "/directives/copyDirect",
    meta: {
      icon: "Stamp",
      title: "自定义指令",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
      {
        path: "/directives/copyDirect",
        name: "copyDirect",
        component: "/directives/copyDirect/index",
        meta: {
          icon: "Menu",
          title: "复制指令",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/directives/watermarkDirect",
        name: "watermarkDirect",
        component: "/directives/watermarkDirect/index",
        meta: {
          icon: "Menu",
          title: "水印指令",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/directives/dragDirect",
        name: "dragDirect",
        component: "/directives/dragDirect/index",
        meta: {
          icon: "Menu",
          title: "拖拽指令",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/directives/debounceDirect",
        name: "debounceDirect",
        component: "/directives/debounceDirect/index",
        meta: {
          icon: "Menu",
          title: "防抖指令",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/directives/throttleDirect",
        name: "throttleDirect",
        component: "/directives/throttleDirect/index",
        meta: {
          icon: "Menu",
          title: "节流指令",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      }
    ]
  },
	//echart
  {
    path: "/echarts",
    name: "echarts",
    redirect: "/echarts/waterChart",
    meta: {
      icon: "TrendCharts",
      title: "Echarts",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
      {
        path: "/echarts/waterChart",
        name: "waterChart",
        component: "/echarts/waterChart/index",
        meta: {
          icon: "Menu",
          title: "水型图",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/echarts/columnChart",
        name: "columnChart",
        component: "/echarts/columnChart/index",
        meta: {
          icon: "Menu",
          title: "柱状图",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/echarts/lineChart",
        name: "lineChart",
        component: "/echarts/lineChart/index",
        meta: {
          icon: "Menu",
          title: "折线图",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/echarts/pieChart",
        name: "pieChart",
        component: "/echarts/pieChart/index",
        meta: {
          icon: "Menu",
          title: "饼图",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/echarts/radarChart",
        name: "radarChart",
        component: "/echarts/radarChart/index",
        meta: {
          icon: "Menu",
          title: "雷达图",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/echarts/nestedChart",
        name: "nestedChart",
        component: "/echarts/nestedChart/index",
        meta: {
          icon: "Menu",
          title: "嵌套环形图",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: "/echarts/treeChart",
        name: "treeChart",
        component: "/echarts/treeChart/index",
        meta: {
          icon: "Menu",
          title: "树图 ",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      }
    ]
  },
	//地图
  {
    path: "/map",
    name: "map",
    meta: {
      icon: "TrendCharts",
      title: "地图",
      isLink: "",
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
      {
        path: "/gaud",
        name: "gaud",
        meta: {
          icon: "TrendCharts",
          title: "高德地图",
          isLink: "",
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        },
        children: [
          {
            path: "/map/gaud",
            name: "gaudmapbasic",
            component: "/map/gaud/basic",
            meta: {
              icon: "Menu",
              title: "基础实例",
              isLink: "",
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
          {
            path: "/map/searchMap",
            name: "searchMap",
            component: "/map/gaud/searchMap",
            meta: {
              icon: "Menu",
              title: "查询",
              isLink: "",
              isHide: false,
              isFull: false,
              isAffix: false,
              isKeepAlive: true
            }
          },
        ]
      }
    ]
  },
  
];
