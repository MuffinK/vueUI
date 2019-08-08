<template>
	<div class="x-bar">
		<div :id="id" :option="option" />
	</div>
</template>
<script>
import HighCharts from "highcharts";
import Highcharts3d from "highcharts/highcharts-3d";
Highcharts3d(HighCharts);
export default {
	// 验证类型
	props: {
		// eslint-disable-next-line vue/require-default-prop
		id: {
			type: String
		},
		// eslint-disable-next-line vue/require-default-prop
		option: {
			type: Object
		}
	},
	watch: {
		option() {
			HighCharts.chart(this.id, this.option);
		}
	},
	mounted() {
		HighCharts.chart(this.id, this.option);
	}
};
</script>
