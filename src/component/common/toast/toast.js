import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./toast.scss";

let timer;

function Toast() {
	console.log("初始化Toast方法");
	const [show, setShow] = useState(false);
	const [content, setContent] = useState("我是默认文案");

	const text = (text = "请输入提示内容", time = 800) => {
		setShow(true);
		setContent(text);
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			setShow(false);
			timer = null;
		}, time);
	};

	// 把这个方法暴露出去
	React.Component.prototype.$toast = text;

	return (
		<section className="toast" style={{ display: show ? "block" : "none" }}>
			<span>{content}</span>
		</section>
	);
}

let el = document.querySelector("#toast-root");
if (!el) {
	el = document.createElement("section");
	el.id = "toast-root";
	document.body.append(el);
}

// 暂时不确定渲染多个节点会不会造成问题
ReactDOM.render(<Toast />, el);
