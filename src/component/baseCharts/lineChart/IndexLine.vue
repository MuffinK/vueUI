<template>
	<a-card hoverable>
		<div class="title">
			<h2>
				{{ nowValue }}
				<span
					style="padding-left: 15px;color: green;font-size:small;margin-botton: 10px"
				>
					<img :src="up" style="width: 20px" >15%
				</span>
			</h2>

			<div style="font-size: small;">{{ type }}</div>
		</div>
		<a-card-meta>
			<template slot="description">
				<v-chart
					:force-fit="true"
					:height="height"
					:data="data"
					:scale="scale"
					:padding="[0, 0, 0, 0]"
				>
					<v-tooltip />
					<!-- <v-axis data-key="month" :label="label" :tick-line="tickLine" /> -->
					<!-- <v-legend /> -->
					<v-smooth-line
						position="month*temperature"
						color="#79bdff"
						shape="smooth"
					/>
					<v-area
						shape="smooth"
						position="month*temperature"
						color="l(100) 0:#79bdff 1:#c2e0ff"
					/>
					<!-- <v-point position="month*temperature" color="city" shape="circle" /> -->
				</v-chart>
			</template>
		</a-card-meta>
	</a-card>
</template>
<script lang="ts">
// import DataSet from "@antv/data-set";
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";

import IotTitle from "../../baseLayout/IotTitle.vue";
import SmallGraph from "../../baseLayout/SmallGraph.vue";
import { default as up } from "../../../icons/up.png";
const scale = [
	{
		dataKey: "month",
		min: 0,
		max: 0.12
	}
];

@Component({
	components: {
		IotTitle
	}
})
export default class TransitionTradeLine extends Mixins(SmallGraph) {
	@Prop({ default: "" }) readonly title!: string;
	@Prop({ default: "" }) readonly type!: string;
	@Prop({ default: "" }) readonly nowValue!: string;
	up = up;
	tickLine = {
		length: 6,
		lineWidth: 1,
		stroke: "#bfbfbf"
	};
	label = {
		textStyle: {
			fill: "#aaaaaa"
		}
	};
	data = [
		{ month: 0, temperature: 3.9 },
		{ month: 0.02, temperature: 4.2 },
		{ month: 0.03, temperature: 5.7 },
		{ month: 0.04, temperature: 8.5 },
		{ month: 0.05, temperature: 6.7 },
		{ month: 0.06, temperature: 8.5 },
		{ month: 0.07, temperature: 5.7 },
		{ month: 0.08, temperature: 6.6 },
		{ month: 0.09, temperature: 8.5 },
		{ month: 0.1, temperature: 7.5 },
		{ month: 0.11, temperature: 6.6 },
		{ month: 0.12, temperature: 4.8 }
	];
	scale = scale;
	style = { stroke: "#fff", lineWidth: 1 };
}
</script>
<style scope>
.ant-card-body {
	padding: 0;
}
.title {
	padding: 30px;
}
</style>
