<template>
	<div id="hello-root">
		<Background />
		<a-row>
			<a-col :span="8">
				<a-row>
					<a-col :span="24"><ChannelPie title="交易渠道"/></a-col>
				</a-row>
				<div v-for="(lineChart, index) in lineChartList" :key="index">
					<TransitionTradeLine title="交易渠道" />
				</div>
			</a-col>

			<a-col :span="8"><TitleChart /> 交易量统计 <DataTable /></a-col>
			<a-col :span="8">
				<div v-for="(lineChart, index) in lineChartList" :key="index">
					<TransitionTradeLine title="服务详情" /></div
			></a-col>
		</a-row>
	</div>
</template>
<script>
import Background from "../baseLayout/Background";
import ScenesPie from "../pieCharts/ScenesPie";
import ChannelPie from "../pieCharts/ChannelPie";
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
		DataTable,
		ChannelPie
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
