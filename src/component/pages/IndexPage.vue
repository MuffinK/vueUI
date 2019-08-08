<template>
	<div id="index-page">
		<a-tabs default-active-key="1" @change="callback">
			<a-tab-pane key="1" tab="运营">
				<h1>场景介绍</h1>
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
			</a-tab-pane>
			<a-tab-pane key="2" tab="运维">Content of Tab Pane 2</a-tab-pane>
			<a-tab-pane key="3" tab="架构">Content of Tab Pane 3</a-tab-pane>
		</a-tabs>
	</div>
</template>
<script>
import Accordion from "../otherComponent/Accordion";
import IndexLine from "../baseCharts/lineChart/IndexLine";
export default {
	name: "IndexPage",
	components: {
		Accordion,
		IndexLine
	},
	methods: {
		callback(e) {
			console.log(e);
		}
	}
};
</script>
<style scope>
#index-page div.ant-tabs-nav {
	float: right;
}
body {
	background: #f3f3f7;
}
h1 {
	width: 900px;
	margin: auto;
}
.main-contain {
	width: 900px;
	margin: auto;
}
</style>
