<template>
	<div>
		<a-row>
			<a-col>
				<a-col :span="6"><ActivityLine /></a-col>
				<a-col :span="12">col-12</a-col>
				<a-col :span="6">col-12</a-col>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import ActivityLine from "../baseCharts/lineChart/ActivityLine.vue";
export default {
	name: "PosScense",
	components: {
		ActivityLine
	}
};
</script>
