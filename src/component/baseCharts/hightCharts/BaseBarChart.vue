<template>
	<div>
		<XChart v-if="type == '3D'" id="highcharts" class="high" :option="option" />
		<e-chart v-if="type == '2D'" :options="options" theme="light" />
	</div>
</template>
<style>
.high {
	background-color: transparent;
}
.echarts {
	width: 100%;
	height: 250px;
}
</style>

<script>
// 导入chart组件
import XChart from "./Charts";
import { mapGetters, mapActions } from "vuex";
export default {
	components: {
		XChart
	},
	props: {
		type: {
			type: String,
			required: true
		},
		categories: {
			type: Array,
			required: true
		},
		series: {
			type: Array,
			required: true
		}
	},
	computed: {
		option() {
			return {
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
					categories: this.categories
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
				series: this.series
			};
		},
		options() {
			return {
				tooltip: {
					trigger: "axis",
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				legend: {
					data: this.categories
				},
				grid: {
					left: "3%",
					right: "4%",
					bottom: "3%",
					containLabel: true
				},
				xAxis: [
					{
						type: "category",
						data: this.categories
					}
				],
				yAxis: [
					{
						type: "value"
					}
				],
				series: this.series
			};
		}
	},
	created() {
		this.insertParams({
			startTime: "2018-02-02",
			endTime: "2018-08-02",
			type: "2"
		});
	},
	methods: {
		...mapActions("chartdata", ["insertParams"])
	}
};
</script>
