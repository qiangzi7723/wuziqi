import axios from "../index";

export default {
	marquee() {
		return axios.get("/activity/api/backactivity/common/raffle/marquee", {
			activityId: 2042,
		});
	},
};
