import axios from "./config";
import React from "react";

class Axios {
	constructor() {}

	_requestCb(response) {
		if (response.data.code != "0") {
			console.log("接口状态异常");
		}
		if (response.data.code == "503") {
		}
		return response.data;
	}

	async post(...params) {
		const response = await axios.post(...params);
		return this._requestCb(response);
	}

	async get(...params) {
		let qs = "";
		let url = params[0];

		if (params[1] != null) {
			// 说明传入了GET参数
			// 暂不兼容递归对象的参数
			for (const key in params[1]) {
				const value = params[1][key];
				if (qs.length > 0) qs += "&";
				qs += key + "=" + value;
			}
		}
		if (qs.length > 0) {
			url += "?" + qs;
		}
		const response = await axios.get(url, params[2]);
		return this._requestCb(response);
	}
}

const axiosFn = new Axios();
React.Component.prototype.$axios = axiosFn;
export default axiosFn;
