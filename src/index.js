import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Route from "./route/route";
import "./style/reset.scss";
import "../src/config/store";
import "../src/config/rem";
import "../src/axios/index";
import "@component/common/toast/toast";
import "../src/config/ls";

ReactDOM.render(
	<React.StrictMode>
		<Route></Route>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
