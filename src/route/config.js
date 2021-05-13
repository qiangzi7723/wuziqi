import About from "../page/about/about";
import Home from "../page/home/home";
import Preload from "../page/preload/perload";

const config = [
	{
		path: "/about",
		component: About,
	},
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/preload",
		component: Preload,
	},
];

export { config };
