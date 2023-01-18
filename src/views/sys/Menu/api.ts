import http from "@/api";
// * 编辑用户
export const getMenulist = (params: {}) => {
  return http.post(`/api/config/menu/list`, params);
};
