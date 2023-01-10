import { Table } from "./interface";
import { reactive, computed, onMounted, toRefs } from "vue";
/**
 * @description table 页面操作方法封装
 * @param {Function} api 获取表格数据 api 方法(必传)
 * @param {Object} initParam 获取数据初始化参数(非必传，默认为{})
 * @param {Boolean} isPageable 是否有分页(非必传，默认为true)
 * @param {Function} dataCallBack 对后台返回的数据进行处理的方法(非必传)
 * */
export const useTable2 = (
  api: (params: any) => Promise<any>,
  initParam: object = {},
  isPageable: boolean = true,
  dataCallBack?: (data: any) => any
) => {
  const staet = reactive({
    // 表格数据
    tableData: [],
    // 分页数据
    pageable: {
      // 当前页数
      pageNum: 1,
      // 每页显示条数
      pageSize: 10,
      // 总条数
      total: 0
    },
    // 查询参数(只包括查询)
    searchParam: {},
    // 初始化默认的查询参数
    searchInitParam: {},
    // 总参数(包含分页和查询参数)
    totalParam: {}
  });
  /**
   * @description 表格数据查询
   * @return void
   * */
  const search = () => {};

  return {
    search
  };
};
