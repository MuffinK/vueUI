<template>
	<div id="network-graph" ref="network" />
</template>
<script>
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import { networkElements, networkStyle, networkLayout } from "./GraphData";

cytoscape.use(dagre);

let cy;

export default {
	name: "NetworkGraph",
	mounted() {
		cy = cytoscape({
			container: this.$refs.network,
			elements: networkElements,
			style: networkStyle,
			layout: networkLayout
		});
		cy.layout({ name: "dagre", rankDir: "TB", rankSep: 10 }).run();
	}
};
</script>
<style scoped>
#network-graph {
	width: 100%;
	height: 100%;
	min-height: 700px;
}
</style>
