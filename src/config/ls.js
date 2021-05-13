import React from "react";

class Ls {
	constructor() {
		this.prefix = "activity-template";
	}

	_prefix(key) {
		return this.prefix + "-" + key;
	}

	set(key, value) {
		const newKey = this._prefix(key);
		window.localStorage.setItem(newKey, JSON.stringify(value));
	}

	get(key) {
		const newKey = this._prefix(key);
		let source = window.localStorage.getItem(newKey);
		try {
			source = JSON.parse(source);
		} catch (e) {
		} finally {
		}
		return source;
	}
}

const ls = new Ls();
window.$ls = ls;
React.Component.prototype.$ls = ls;
export default ls;
