
import { list } from "../../Data/Account";
const login = {
	"post|/api/user/delete": (query: any) => {
		let obj = JSON.parse(query.body);
		let id=obj.id
		let index =list.findIndex(it=>it.id==id)
		console.log(index,'index')
		list.splice(index);
		console.log(list, "list");
		return {
			status: 200,
			message: "success"
		};
	}
};

export default login;
