import React from "react";
import resolve from "resolve";
import assetList from "./asset";
import "./preload.scss";
import bootApi from "../../axios/api/boot";

class Preload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			length: assetList.length,
			current: 0,
		};
	}

	async componentDidMount() {
		console.log("进入预加载组件");
		await this.init();
	}

	async init() {
		await Promise.allSettled([
			this.preloadImg(),
			this.preloadMore(),
			this.preloadAPI(),
		]);
		// 所有方法都已经加载完毕

		console.log("跳转");
		// 不管是加载成功，还是失败，都应该让用户能进入主页面
		this.$store.preloadDone = true;
		this.props.history.push("/home");
	}

	async preloadImg() {
		return new Promise((resolve) => {
			if (assetList.length === 0) {
				console.log("图片资源加载完毕");
				resolve();
			}

			for (let i = 0; i < assetList.length; i++) {
				const item = assetList[i];
				const img = new Image();
				img.onload = img.onerror = () => {
					console.log("图片资源加载", img.src);
					this.setState({
						current: this.state.current + 1,
					});
					if (this.state.current >= assetList.length) {
						// 说明图片资源加载完毕
						console.log("图片资源加载完毕");
						resolve();
					}
				};
				img.src = item;
			}
		});
	}

	async preloadMore() {
		// TODO 可以自行扩展同类型方法
		return new Promise((resolve) => {
			console.log("加载其他资源");
			resolve();
		});
	}

	async preloadAPI() {
		await bootApi.marquee();
		console.log("接口加载完毕");
	}

	render() {
		return (
			<div className="preload">
				<div className="preload-bar">
					<div className="bar">
						<div
							className="fill"
							style={{
								width: (this.state.current / this.state.length) * 100 + "%",
							}}
						></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Preload;
