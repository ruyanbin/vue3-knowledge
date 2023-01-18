import { list } from "../../Data/menu";

const menu = {
	"post|/api/menu/list": (query: any) => {
		return {
			status: 200,
			message: "success",
			data: list
		};
	}
};

export default menu;
