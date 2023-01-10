import { ResPage, User } from "@/api/interface/index";
import http from "@/api";
/**
 * @name 用户管理模块
 */
// * 获取用户列表
export const getUserList = (params: User.ReqGetUserParams) => {
  return http.post<ResPage<User.ResUserList>>(`/api/user/list`, params);
};
// * 新增用户
export const addUser = (params: any) => {
  return http.post(`/api/user/add`, params);
};
// * 编辑用户
export const editUser = (params: { id: string }) => {
  return http.post(`/api/user/edit`, params);
};
// * 删除用户
export const deleteUser = (params: { id: string[] }) => {
  return http.post(`/api/user/delete`, params);
};
// * 重置用户密码
export const resetUserPassWord = (params: { id: string }) => {
  return http.post(`/api/user/rest_password`, params);
};
// * 获取用户状态
export const getUserStatus = () => {
  return http.get<User.ResStatus>(`/api/user/status`);
};
// * 获取用户性别字典
export const getUserGender = () => {
  return http.get<User.ResGender>(`/api/user/gender`);
};
// * 切换用户状态
export const changeUserStatus = (params: { id: string; status: number }) => {
  return http.post(`/api/user/change`, params);
};
// * 导出用户数据
export const exportUserInfo = (params: User.ReqGetUserParams) => {
  return http.post<BlobPart>(`/api/user/export`, params, {
    responseType: "blob"
  });
};
// * 批量添加用户
export const BatchAddUser = (params: FormData) => {
  return http.post(`/api/user/import`, params);
};
