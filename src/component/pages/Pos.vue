<template>
	<div>
		<h1>车押Pos</h1>
		<a-row>
			<a-col>
				<a-col :span="12"><MapChart /></a-col>
				<a-col :span="12"><ActivityLine /><Barchart /></a-col>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import MapChart from "../baseCharts/mapChart/MapChart.vue";
import ActivityLine from "../baseCharts/lineChart/ActivityLine.vue";
import Barchart from "../baseCharts/hightCharts/BarChart.vue";

export default {
	name: "PosScense",
	components: {
		Barchart,
		ActivityLine,
		MapChart
	}
};
</script>
<style scoped>
h1 {
	text-align: center;
}
</style>
