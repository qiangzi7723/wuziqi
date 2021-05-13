import React from "react";
import { Switch, HashRouter as Router } from "react-router-dom";
import Guard from "./guard";

class Route extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Switch>
					<Guard></Guard>;
				</Switch>
			</Router>
		);
	}
}

export default Route;
