import http from '@/api';
export const loginApi = () => {
	return http.get(
		`/api/parameter/query`,
		{},
		{
			headers: { noLoading: true },
		}
	); // 正常 post json 请求  ==>  application/json
};
