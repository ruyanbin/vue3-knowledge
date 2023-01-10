export const list = [
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
  }
];
