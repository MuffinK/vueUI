<template>
	<div id="index-page">
		<a-tabs default-active-key="1" @change="callback">
			<a-tab-pane key="1" tab="运营">
				<router-view />
			</a-tab-pane>
			<a-tab-pane key="2" tab="运维"><NetworkGraph /></a-tab-pane>
			<a-tab-pane key="3" tab="架构" />
		</a-tabs>
	</div>
</template>
<script>
import D3Netgraph from "../networkGraph/D3Netgraph";
import NetworkGraph from "../networkGraph/NetworkGraph";
export default {
	name: "IndexPage",
	components: {
		NetworkGraph
		// D3Netgraph
	},
	methods: {
		callback(e) {
			console.log(e);
		}
	}
};
</script>
<style scoped>
div#index-page >>> div.ant-tabs-nav {
	float: right;
}
</style>
