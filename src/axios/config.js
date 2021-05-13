import axios from "axios";

// 改写axios默认配置

axios.defaults.baseURL = "https://luckdraw.jegotrip.com.cn";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 5000;
axios.defaults.responseType = "json";

axios.defaults.transformRequest = [
	(data, headers) => {
		// 设置公共请求头
		// headers.get['Authorization'] = 'Bear ' + ls.get('jwt');
		// headers.post['Authorization'] = 'Bear ' + ls.get('jwt');
		console.log(data);
		// 最终必须返回一个字符串
		if (data instanceof FormData) {
			return data;
		} else {
			return JSON.stringify(data);
		}
	},
];

export default axios;
