<script>
import BaseEchart from "../../baseLayout/BaseEchart";
const options = {
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
	},
	yAxis: {
		type: "value"
	},
	series: [
		{
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: "line",
			smooth: true
		}
	]
};

export default {
	name: "TransitionTradeLine",
	mixins: [BaseEchart],
	props: {
		title: String("")
	},
	data() {
		return {
			options,
			initOptions: {
				renderer: "svg"
			},
			style: { stroke: "#fff", lineWidth: 1 }
		};
	}
};
</script>
