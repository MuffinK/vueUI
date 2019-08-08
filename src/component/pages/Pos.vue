<template>
	<div>
		<h1>车押Pos</h1>
		<a-row>
			<a-col>
				<a-col :span="12"><MapChart /></a-col>
				<a-col :span="12"><ActivityLine /></a-col>
				<!-- <a-col :span="6">col-12</a-col> -->
			</a-col>
		</a-row>
	</div>
</template>
<script>
import MapChart from "../baseCharts/mapChart/MapChart.vue";
import ActivityLine from "../baseCharts/lineChart/ActivityLine.vue";

export default {
	name: "PosScense",
	components: {
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
