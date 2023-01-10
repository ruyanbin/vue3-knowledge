import http from "@/api";
import { User } from "@/api/interface";
// * 获取用户部门列表
export const getUserDepartment = () => {
  return http.post<User.ResDepartment>("/api/user/department");
};
