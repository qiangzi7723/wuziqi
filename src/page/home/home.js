import React from "react";
import "./home.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	click(e) {
		const index = e.target.getAttribute("data-index");
		console.log(e.target.getBoundingClientRect());
		console.log(e.clientX, e.clientY);
	}

	render() {
		let cube = new Array();
		for (let i = 0; i < 15 * 15; i++) {
			cube.push(
				<div
					className="cube"
					onClick={this.click.bind(this)}
					data-index={i}
				></div>
			);
		}

		return (
			<div className="home">
				<section className="content">{cube}</section>
			</div>
		);
	}
}

export default Home;
