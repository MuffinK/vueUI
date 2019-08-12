<script>
import BaseEcharts from "../../baseLayout/BaseEchart.vue";

export default {
	name: "NoBoundaryLine",
	mixins: [BaseEcharts],
	data() {
		return {
			options: {
				grid: {
					left: "0%",
					right: "0%",
					top: "0%",
					bottom: "0%",
					show: false
				},
				xAxis: {
					type: "category",
					boundaryGap: false,
					data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					show: false
				},
				yAxis: {
					show: false,
					type: "value"
				},
				// tooltip: {
				// 	trigger: "axis"
				// },
				axisPointer: {
					type: "line",
					show: true
				},
				series: [
					{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: "line",
						smooth: true,
						lineStyle: {
							type: "solid",
							color: "#79bdff"
						},
						itemStyle: {
							opacity: 0
						},
						areaStyle: {
							// @ts-ignore
							color: {
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: "#79bdff" // 0% 处的颜色
									},
									{
										offset: 1,
										color: "#c2e0ff" // 100% 处的颜色
									}
								],
								global: false // 缺省为 false
							}
						}
					}
				]
			}
		};
	}
};
</script>
<style scoped>
.echarts {
	width: 100%;
	height: 150px;
}
</style>
