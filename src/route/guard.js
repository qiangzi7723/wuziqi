import React from "react";
import {
	Switch,
	HashRouter as Router,
	Route,
	Redirect,
} from "react-router-dom";
import { config } from "./config";

class Guard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const currentPath = this.props.location.pathname;
		let target = config.find((item) => {
			return item.path === currentPath;
		});

		if (currentPath === "/preload") {
			// 渲染预加载页面
			target = config.find((item) => {
				return item.path === "/preload";
			});
			return <Route path={target.path} component={target.component}></Route>;
		} else if (target && this.$store.preloadDone) {
			// 路径存在且已经预加载完毕
			return <Route path={target.path} component={target.component}></Route>;
		} else {
			// 重定向
			return <Redirect to="preload"></Redirect>;
		}
	}
}

export default Guard;
