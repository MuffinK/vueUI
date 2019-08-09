<template>
	<div>
		<XChart id="highcharts" class="high" :option="option" />
	</div>
</template>
<style>
.high {
	background-color: transparent;
}
</style>

<script>
// 导入chart组件
import XChart from "./Charts";
export default {
	components: {
		XChart
	},
	data() {
		return {
			option: {
				chart: {
					backgroundColor: "transparent",
					type: "column",
					options3d: {
						enabled: true,
						alpha: 15,
						beta: 15,
						viewDistance: 25,
						depth: 40
					},
					marginTop: 80,
					marginRight: 40
				},
				title: {
					text: ""
				},
				xAxis: {
					categories: [
						"广东",
						"广西",
						"上海",
						"北京",
						"河北",
						"云南",
						"陕西",
						"贵州",
						"湖南"
					]
				},
				yAxis: {
					allowDecimals: false,
					min: 0,
					title: {
						text: "POS 设备数"
					}
				},
				tooltip: {
					headerFormat: "<b>{point.key}</b><br>",
					pointFormat:
						'<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
				},
				plotOptions: {
					column: {
						stacking: "normal",
						depth: 40
					}
				},
				series: [
					{
						name: "活跃",
						stack: "活跃",
						data: [220, 333, 553, 245, 243, 521, 152, 357, 854]
					},
					{
						name: "不活跃",
						stack: "活跃",
						data: [220, 211, 443, 74, 26, 267, 23, 8, 569]
					}
				]
			}
		};
	}
};
</script>
