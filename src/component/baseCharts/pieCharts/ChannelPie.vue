<template>
	<div :class="[$style.LargeGraph]">
		<IotTitle :title="title" />
		<v-chart
			:force-fit="true"
			:height="height"
			:data="data"
			:scale="scale"
			:padding="padding"
		>
			<v-tooltip :show-title="false" data-key="item*percent" />
			<!-- <v-axis /> -->
			<!-- <v-legend data-key="item" /> -->
			<v-pie
				position="percent"
				color="item"
				:v-style="pieStyle"
				:label="labelConfig"
			/>
			<v-coord type="theta" :inner-radius="0.5" />
		</v-chart>
	</div>
</template>
<script>
import DataSet from "@antv/data-set";
import IotTitle from "../baseLayout/IotTitle";
import MediumGraph from "../baseLayout/LargeGraph";
const sourceData = [
	{ item: "AMQ", count: 40 },
	{ item: "EMQ", count: 21 },
	{ item: "Kafka", count: 17 },
	{ item: "Dsf", count: 13 },
	{ item: "Http", count: 9 }
];

const scale = [
	{
		dataKey: "percent",
		min: 0,
		formatter: ".0%"
	}
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
	type: "percent",
	field: "count",
	dimension: "item",
	as: "percent"
});
const data = dv.rows;

export default {
	name: "ScenesPie",
	components: {
		IotTitle
	},
	mixins: [MediumGraph],
	props: {
		title: String("")
	},
	data() {
		return {
			data,
			scale,
			pieStyle: {
				stroke: "#fff",
				lineWidth: 1
			},
			labelConfig: [
				"percent",
				{
					offset: -10,
					formatter: (val, item) => {
						return item.point.item;
					}
				}
			]
		};
	}
};
</script>
