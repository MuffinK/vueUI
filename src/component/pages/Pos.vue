<template>
	<div id="pos-scence">
		<!-- <h1>车押Pos</h1> -->
		<a-row>
			<a-col>
				<a-col :span="12">
					<a-row type="flex" justify="space-between" class="overview">
						<a-col :span="7">
							<IndexLine type="接入量" now-value="20,301" />
						</a-col>
						<a-col :span="7">
							<IndexLine type="交易量" now-value="35,301" />
						</a-col>
						<a-col :span="7">
							<IndexLine type="收益率" now-value="27,301" />
						</a-col>
					</a-row>
					<a-card title="分行分布情况" :bordered="false" :style="cardStyle">
						<MapChart />
					</a-card>
				</a-col>
				<a-col :span="12">
					<a-card title="每日交易量" :bordered="false" :style="cardStyle">
						<TransitionTradeLine />
					</a-card>
					<a-card title="分行交易量" :bordered="false" :style="cardStyle">
						<BaseBarChart :type="type" />
					</a-card>
				</a-col>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import MapChart from "../baseCharts/mapChart/MapChart.vue";
import TransitionTradeLine from "../baseCharts/lineChart/TransitionTradeLine.vue";
import Barchart from "../baseCharts/hightCharts/BarChart.vue";
import IndexLine from "../baseCharts/lineChart/IndexLine.vue";
import BaseBarChart from "../baseCharts/hightCharts/BaseBarChart.vue";
import { mapActions } from "vuex";

export default {
	name: "PosScense",
	components: {
		TransitionTradeLine,
		MapChart,
		IndexLine,
		BaseBarChart
	},
	data() {
		return {
			cardStyle: {
				margin: "20px"
			},
			type: "3D"
		};
	},
	created() {
		this.resetParams();
	},
	mounted() {
		this.invokePushItems("Pos");
		this.hideTitle();
		this.initChartData();
	},
	methods: {
		...mapActions("breadcrumb", ["hideTitle", "invokePushItems"]),
		...mapActions("chartdata", ["initChartData", "resetParams"])
	}
};
</script>
<style scoped>
.overview {
	margin: 20px;
}
h1 {
	text-align: center;
}
#pos-scence >>> .overview .ant-card {
	border-radius: 0px;
}
#pos-scence >>> .ant-card {
	border-radius: 20px;
}
#pos-scence >>> .ant-card-head {
	border-bottom: 0px;
	font-size: xx-large;
	padding-top: 20px;
}
#pos-scence >>> .ant-card-body {
	padding: 0px;
}
#pos-scence >>> .ant-card-head-title {
	padding: 0px;
}
</style>
