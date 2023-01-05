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
      title: "首页",
    },
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
      title: "超级表格",
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
          title: "使用 TreeFilter",
        },
      },
    ],
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
      title: "系统管理",
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
          isKeepAlive: true,
          isLink: "",
          title: "账号管理",
        },
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
          title: "角色管理",
        },
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
          title: "菜单管理",
        },
      },
    ],
  },
];
