<template>
	<div :class="[$style.smallGraph]">
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
import SmallGraph from "../baseLayout/SmallGraph";
const sourceData = [
	{ item: "一", count: 40 },
	{ item: "二", count: 21 },
	{ item: "三", count: 17 },
	{ item: "四", count: 13 },
	{ item: "五", count: 9 }
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
	mixins: [SmallGraph],
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
						return item.point.item + "\n" + val;
					}
				}
			]
		};
	}
};
</script>
