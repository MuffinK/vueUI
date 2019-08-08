<script lang="ts">
import BaseEchart from "../../baseLayout/BaseEchart.vue";
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import Echart from "echarts";

@Component({})
export default class ActivityLine extends Mixins(BaseEchart) {
	options: Echart.EChartOption = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				// 坐标轴指示器，坐标轴触发有效
				type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: [
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
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				data: [
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
			}
		],
		yAxis: [
			{
				type: "value"
			}
		],
		series: [
			{
				name: "活跃",
				type: "bar",
				stack: "活跃",
				data: [220, 333, 553, 245, 243, 521, 152, 357, 854]
			},
			{
				name: "不活跃",
				type: "bar",
				stack: "活跃",
				data: [220, 211, 443, 74, 26, 267, 23, 8, 569]
			}
		]
	};
}
</script>
