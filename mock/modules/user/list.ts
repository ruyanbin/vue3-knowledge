import { list } from "../../Data/Account";

const login = {
	"post|/api/user/list": (query: any) => {
		console.log(JSON.parse(query.body), "后台接收参数");
		return {
			status: 200,
			message: "success",
			data: {
				code: 200,
				datalist: list,
				// "datalist|10": [
				//   {
				//     id: "@guid",
				//     name: "@cname",
				//     "age|20-30": 23,
				//     "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
				//   },
				// ],
				pageNum: 1,
				pageSize: 10,
				total: list.length
			}
		};
	}
};

export default login;
