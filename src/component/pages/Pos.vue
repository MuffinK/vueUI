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
						<Barchart />
					</a-card>
				</a-col>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import MapChart from "../baseCharts/mapChart/MapChart.vue";
import axios from "axios";
import TransitionTradeLine from "../baseCharts/lineChart/TransitionTradeLine.vue";
import Barchart from "../baseCharts/hightCharts/BarChart.vue";
import IndexLine from "../baseCharts/lineChart/IndexLine.vue";
import BaseBarChart from "../baseCharts/hightCharts/BaseBarChart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "PosScense",
	components: {
		Barchart,
		TransitionTradeLine,
		MapChart,
		IndexLine,
		BaseBarChart,
		MapChart
	},
	data() {
		return {
			cardStyle: {
				margin: "20px"
			},
			type: "3D"
		};
	},
	computed: {
		...mapGetters("chartdata", {
			params: "getParams"
		})
	},
	created() {
		this.resetParams();
	},
	mounted() {
		this.invokePushItems("Pos");
		this.hideTitle();
		var item = this.params[0];
		var url = `/iot/last?scene=${item.type}&time=${item.startTime}--${item.endTime}`;
		axios
			.get(url)
			.then(response => {
				this.insertAllData({ [item.type]: response });
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
		this.insertAllData({
			barchat: {
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
			}
		});
	},
	methods: {
		...mapActions("breadcrumb", ["hideTitle", "invokePushItems"]),
		...mapActions("chartdata", ["insertAllData", "resetParams"])
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
