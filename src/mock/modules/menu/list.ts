import { list } from "@/mock/Data/menu";

const menu = {
  "post|/api/menu/list": (query: any) => {
    console.log(JSON.parse(query.body), "query");
    return {
      status: 200,
      message: "success",
      data: list,
    };
  },
};

export default menu;
