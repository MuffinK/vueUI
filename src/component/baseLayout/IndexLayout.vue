<template>
	<div id="index-page">
		<a-tabs default-active-key="1" @change="callback">
			<a-tab-pane key="1" tab="运营">
				<router-view />
			</a-tab-pane>
			<a-tab-pane key="2" tab="运维"><NetworkGraph /></a-tab-pane>
			<a-tab-pane key="3" tab="架构">ss</a-tab-pane>
		</a-tabs>
	</div>
</template>
<script>
import NetworkGraph from "../networkGraph/NetworkGraph";
export default {
	name: "IndexPage",
	components: {
		NetworkGraph
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

h1 {
	width: 900px;
	margin: auto;
}
.main-contain {
	width: 900px;
	margin: auto;
}
</style>
