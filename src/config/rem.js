class Rem {
	constructor() {
		// 计算后，对应375*2的2倍稿设计稿，500px可直接换算为5rem
		document.addEventListener(
			"DOMContentLoaded",
			function (e) {
				document.getElementsByTagName("html")[0].style.fontSize =
					window.innerWidth / 7.5 + "px";
			},
			false
		);
	}
}

export default new Rem();
