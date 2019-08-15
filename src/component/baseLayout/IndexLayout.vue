<template>
	<div id="index-page">
		<a-tabs v-model="tabNumber" default-active-key="1">
			<a-tab-pane key="1" tab="运营">
				<router-view />
			</a-tab-pane>
			<a-tab-pane key="2" tab="运维"><NetworkGraph /></a-tab-pane>
			<a-tab-pane key="3" tab="架构"><D3Netgraph /></a-tab-pane>
		</a-tabs>
	</div>
</template>
<script>
import D3Netgraph from "../networkGraph/D3Netgraph";
import NetworkGraph from "../networkGraph/NetworkGraph";

const tabNumbers = {
	indexLayout: "1",
	Operating: "1",
	maintenance: "2",
	struct: "3",
	index: "1"
};
const valToPath = {
	"1": "/Operating/index",
	"2": "/maintenance",
	"3": "/struct"
};
export default {
	name: "IndexPage",
	components: {
		NetworkGraph,
		D3Netgraph
	},
	computed: {
		tabNumber: {
			get() {
				return tabNumbers[this.$route.name] || "1";
			},
			set(val) {
				this.$router.push({ path: valToPath(val) || "/Operating/index" });
			}
		}
	},
	beforeCreate() {
		if (this.$route.name === "index") {
			this.$router.push({ path: "/Operating/index" });
		}
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
