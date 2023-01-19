import http from '@/api';
// * 编辑用户
export const getMenulist = (params: { id: string }) => {
	return http.post(`/api/menu/list`, params);
};
