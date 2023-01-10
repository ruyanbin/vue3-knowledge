import { generateUUID } from "../../../src/utils/util";
import { list } from "../../Data/Account";
const login = {
	"post|/api/user/add": (query: any) => {
		let obj = JSON.parse(query.body);
		obj.id = generateUUID();
		obj.createTime = new Date();
		list.unshift(obj);
		console.log(list, "list");
		return {
			status: 200,
			message: "success"
		};
	}
};

export default login;
