<template>
	<div id="network-graph" :ref="network" />
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import cytoscape from "cytoscape";
import { networkElements, networkStyle, networkLayout } from "./GraphData";
let cy: cytoscape.Core;

@Component({})
export default class NetworkGraph extends Vue {
	// name = "network";
	ddd = "aaa";
	network = "network";
	$refs!: {
		network: HTMLElement;
	};

	mounted() {
		cy = cytoscape({
			container: this.$refs.network,
			elements: networkElements,
			style: networkStyle,
			layout: networkLayout
		});
	}
}
</script>
<style scoped>
#network-graph {
	width: 100%;
	height: 100%;
}
</style>
