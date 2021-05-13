import React from "react";

const data = {
	// 加载页状态
	preloadDone: false,
};

class Store {
	constructor() {
		for (const key in data) {
			this[key] = data[key];
		}
	}
}
const store = new Store();

window.$store = store;
React.Component.prototype.$store = store;
export default store;
