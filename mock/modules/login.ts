import { generateUUID } from "../../src/utils/util";
import { Login } from "../../src/api/interface/index";
const login = {
	"post|/api/login": (query: Login.ReqLoginForm) => {
		return {
			status: 200,
			message: "success",
			data: {
				token: generateUUID()
			}
		};
	}
};

export default login;
