<template>
	<div id="index-page">
		<a-tabs v-model="tabNumber" default-active-key="1">
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

const tabNumbers = {
	indexLayout: "1",
	Operating: "1",
	maintenance: "2"
};
export default {
	name: "IndexPage",
	components: {
		NetworkGraph
		// D3Netgraph
	},
	computed: {
		tabNumber: {
			get() {
				return tabNumbers[this.$route.name] || "1";
			},
			set(val) {
				switch (val) {
					case "1":
						this.$router.push({ path: "/Operating/index" });
						break;
					case "2":
						this.$router.push({ path: "/maintenance" });
						break;
					default:
						this.$router.push({ path: "/Operating/index" });
						break;
				}
			}
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
