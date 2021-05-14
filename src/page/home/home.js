import React from "react";
import { diff } from "semver";
import "./home.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropList: [],
		};
		this.posMap = ["lt", "rt", "rb", "lb"];
		this.prev = {
			ref: null,
		};
		this.isBlack = true;
	}

	componentDidMount() {}

	drop(e) {
		const index = this._calDistance(e);
		const dataIndex = e.target.getAttribute("data-index");

		const dropList = this.state.dropList;
		const target = {
			dataIndex,
			pos: this.posMap[index],
			color: this.isBlack ? "black" : "white",
		};
		dropList.push(target);
		this.setState({
			dropList,
		});

		console.log(dropList);
		this.isBlack = !this.isBlack;
	}

	highlight(e) {
		const dataIndex = e.target.getAttribute("data-index");
		if (!dataIndex) return;
		const index = this._calDistance(e);

		// 先取消上一个高亮
		if (this.prev.ref) {
			this.prev.ref.classList.remove("highlight", "lt", "rt", "rb", "lb");
		}

		// 添加高亮
		const classList = e.target.classList;
		classList.add("highlight");
		classList.add(this.posMap[index]);

		this.prev.ref = this.refs[dataIndex];
	}

	_calDistance(e) {
		const cx = e.clientX;
		const cy = e.clientY;
		const rect = e.target.getBoundingClientRect();

		const rectPosition = [
			[rect.left, rect.top],
			[rect.right, rect.top],
			[rect.right, rect.bottom],
			[rect.left, rect.bottom],
		];

		const diff = rectPosition.map((item) => {
			const diffX = cx - item[0];
			const diffY = cy - item[1];
			return Math.abs(diffX) + Math.abs(diffY);
		});

		const min = Math.min(...diff);
		const index = diff.findIndex((item) => {
			return item == min;
		});
		return index;
	}

	render() {
		// 棋子
		const chess = (index) => {
			const doms = new Array();
			for (let z = 0; z < 4; z++) {
				doms.push(
					<div
						className={this.posMap[z] + " chess"}
						style={{
							display: this.state.dropList.find((item) => {
								return item.dataIndex == index && item.pos == this.posMap[z];
							})
								? "block"
								: "none",
							background: this.state.dropList.find((item) => {
								return (
									item.dataIndex == index &&
									item.pos == this.posMap[z] &&
									item.color == "black"
								);
							})
								? "black"
								: "white",
						}}
					></div>
				);
			}
			return doms;
		};

		// 棋盘
		let cube = new Array();
		for (let i = 1; i <= 15; i++) {
			for (let j = 1; j <= 15; j++) {
				cube.push(
					// 父级标签，渲染棋盘
					<div
						className="cube"
						onClick={this.drop.bind(this)}
						onMouseMove={this.highlight.bind(this)}
						data-i={i}
						data-j={j}
						data-index={(i - 1) * 15 + j}
						key={(i - 1) * 15 + j}
						id={(i - 1) * 15 + j}
						ref={(i - 1) * 15 + j}
					>
						{/* 子级标签，渲染棋子 */}
						{chess((i - 1) * 15 + j)}
					</div>
				);
			}
		}

		return (
			<div className="home">
				<section className="content">{cube}</section>
			</div>
		);
	}
}

export default Home;
