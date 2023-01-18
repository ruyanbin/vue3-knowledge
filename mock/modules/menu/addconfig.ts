import { list } from "../../Data/configMenu";

const menu = {
  "post|/api/config/menu/add": (query: any) => {
    return {
      status: 200,
      message: "success",
      data: {
        code: 200,
        datalist: list,
        pageNum: 1,
        pageSize: 10,
        total: list.length
      }
    };
  }
};

export default menu;
