<template>
	<div>
		<Accordion />
		<h1>物联网总览</h1>
		<div class="main-contain">
			<a-row type="flex" justify="space-between">
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
		</div>
	</div>
</template>
<script lang="ts">
import Accordion from "../otherComponent/Accordion.vue";
import IndexLine from "../baseCharts/lineChart/IndexLine.vue";

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
	components: {
		Accordion,
		IndexLine
	}
})
export default class IndexPage extends Vue {}
</script>
<style scoped>
h1 {
	width: 900px;
	margin: auto;
}
.main-contain {
	width: 900px;
	margin: auto;
}
</style>
