import http from "@/api";
import { Login } from "@/api/interface/index";
export const loginApi = () => {
  return http.get(
    `/api/parameter/query`,
    {},
    {
      headers: { noLoading: true },
    }
  ); // 正常 post json 请求  ==>  application/json
};
