import { generateUUID } from "@/utils/util";
import { Login } from "@/api/interface/index";
const login = {
  "post|/api/user/add": (query: Login.ReqLoginForm) => {
    return {
      status: 200,
      message: "success",
      data: {
        token: generateUUID(),
      },
    };
  },
};

export default login;