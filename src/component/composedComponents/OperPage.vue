<template>
	<div id="hello-root">
		<Background />
		<a-row>
			<a-col :span="8">
				<div v-for="(lineChart, index) in lineChartList" :key="index">
					<TransitionTradeLine :title="lineChart.title" />
				</div>
			</a-col>
			<a-col :span="8"><TitleChart /> <DataTable /></a-col>
			<a-col :span="8">
				<a-row>
					<a-col :span="12"><ScenesPie :title="'pietitle'"/></a-col>
					<a-col :span="12"><ScenesPie :title="'pietitle'"/></a-col>
				</a-row>
				<a-row>
					<a-col :span="12"><ScenesPie :title="'pietitle'"/></a-col>
					<a-col :span="12"><ScenesPie :title="'pietitle'"/></a-col>
				</a-row>
				<MessageCount title="交易量数据, 不停循环"
			/></a-col>
		</a-row>
	</div>
</template>
<script>
import Background from "../baseLayout/Background";
import ScenesPie from "../pieCharts/ScenesPie";
import TransitionTradeLine from "../lineChart/TransitionTradeLine";
import MessageCount from "../barChart/MessageCount";
import TitleChart from "../textChart/TitleChart";
import DataTable from "../dataTable/DataTable.vue";
import { setInterval } from "timers";
export default {
	name: "Hello",
	components: {
		Background,
		ScenesPie,
		TransitionTradeLine,
		MessageCount,
		TitleChart,
		DataTable
	},
	data() {
		return {
			env: process.env.NODE_ENV,
			lineChartList: [
				{
					title: 1
				},
				{
					title: 2
				},
				{
					title: 3
				},
				{
					title: 4
				}
			]
		};
	},
	mounted() {
		let i = 5;
		setInterval(() => {
			this.lineChartList = this.lineChartList.slice(1);
			this.lineChartList.push({ title: i++ });
		}, 2000);
	}
};
</script>
<style>
#hello-root {
	height: 100vh;
	width: 100vw;
}
</style>
