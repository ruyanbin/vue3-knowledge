import http from "@/api";
import { Login } from "@/api/interface/index";
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>("/api/login", params, {
    headers: { noLoading: true },
  }); // 正常 post json 请求  ==>  application/json
};
