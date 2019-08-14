<template>
	<div id="network-graph">
		<svg id="netgraph" ref="d3svg" width="600px" height="500px" />
	</div>
</template>
<script>
import * as d3 from "d3/build/d3.min.js";
export default {
	name: "D3Netgraph",
	mounted() {
		// =============================
		// PRINTING DEVICE DETAILS TABLE
		// =============================

		// ########
		// # MAIN #
		// ########
		var svg = d3.select(this.$refs.d3svg),
			//width = +svg.attr("width"),
			// height = +svg.attr("height");
			width =
				window.innerWidth ||
				document.documentElement.clientWidth ||
				document.body.clientWidth,
			height =
				window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight;

		d3.select("svg").attr("height", height);
		d3.select("svg").attr("width", width);

		var color = d3.scaleOrdinal(d3.schemeCategory20);

		var simulation = d3
			.forceSimulation()
			.force(
				"link",
				d3
					.forceLink()
					.id(d => d.id)
					.distance(100)
					.strength(1)
			)
			.force(
				"charge",
				d3
					.forceManyBody()
					.strength(-200)
					.distanceMax(500)
					.distanceMin(50)
			)
			// .force("x", d3.forceX(d => (d.group * width) / 7).strength(1))
			// .force("y", d3.forceY(d => d.yPlace * height / 15).strength(1))
			.force("center", d3.forceCenter(width / 2, height / 2))
			.force("collision", d3.forceCollide().radius(35));

		function dragstarted(d) {
			if (!d3.event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		}

		function dragged(d) {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		}

		function dragended(d) {
			if (!d3.event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		}
		// ######################################
		// # Read graph.json and draw SVG graph #
		// ######################################
		d3.json("../../../d3-netgraph/python/graph.json", function(error, graph) {
			if (error) throw error;

			var link = svg
				.append("g")
				.selectAll("line")
				.data(graph.links)
				.enter()
				.append("line")
				.attr("stroke", function(d) {
					return color(parseInt(d.value));
				})
				.attr("stroke-width", function(d) {
					return Math.sqrt(parseInt(d.value));
				})
				.attr("class", "pass")
				.attr("marker-mid", "url(#arror)");

			var node = svg
				.append("g")
				.attr("class", "nodes")
				.selectAll("a")
				.data(graph.nodes)
				.enter()
				.append("a")
				.attr("target", "_blank")
				.attr("xlink:href", d => window.location.href + "?device=" + d.id);

			node.on("click", function(d, i) {
				d3.event.preventDefault();
				d3.event.stopPropagation();
				// OnClickDetails(d.id);
			});

			node.call(
				d3
					.drag()
					.on("start", dragstarted)
					.on("drag", dragged)
					.on("end", dragended)
			);

			node
				.append("image")
				.attr(
					"xlink:href",
					d => "../../../d3-netgraph/img/group" + d.group + ".png"
				)
				.attr("width", 32)
				.attr("height", 32)
				.attr("x", -16)
				.attr("y", -16)
				.attr("fill", d => color(d.group));

			node
				.append("text")
				.attr("font-size", "0.8em")
				.attr("dx", "-3em")
				.attr("dy", "-2em")
				.attr("x", +8)
				.text(function(d) {
					return d.id;
				});

			node.append("title").text(function(d) {
				return d.id;
			});

			function ticked() {
				link
					.attr("x1", function(d) {
						return d.source.x;
					})
					.attr("y1", function(d) {
						return d.source.y;
					})
					.attr("x2", function(d) {
						return d.target.x;
					})
					.attr("y2", function(d) {
						return d.target.y;
					});

				node.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
			}

			simulation.nodes(graph.nodes).on("tick", ticked);

			simulation.force("link").links(graph.links);
		});
	}
};
</script>
<style scoped>
#network-graph {
	width: 100%;
	height: 100%;
	min-height: 700px;
}
.links line {
	stroke: #999;
	stroke-opacity: 0.6;
}

.infobox {
	font-size: 0.9em;
	width: 100%;
	padding: 15px;
}

table.infobox {
	border: 2px solid #ffffff;
	width: 100%;
	text-align: center;
	border-collapse: collapse;
}
table.infobox td,
table.infobox th {
	border: 1px solid #ffffff;
	padding: 3px 4px;
}
table.infobox tbody td {
	font-size: 13px;
}
table.infobox td:nth-child(even) {
	background: #ebebeb;
}
table.infobox thead {
	background: #ffffff;
	border-bottom: 4px solid #333333;
}
table.infobox thead th {
	font-size: 15px;
	font-weight: bold;
	color: #333333;
	text-align: center;
	border-left: 2px solid #333333;
}
table.infobox thead th:first-child {
	border-left: none;
}

table.infobox tfoot {
	font-size: 14px;
	font-weight: bold;
	color: #333333;
	border-top: 4px solid #333333;
}
table.infobox tfoot td {
	font-size: 14px;
}

.infobox2 {
	font-size: 0.9em;
	width: 100%;
	padding: 15px;
}

table.infobox2 {
	border: 2px solid #ff5555;
	width: 100%;
	text-align: center;
	border-collapse: collapse;
}
table.infobox2 td,
table.infobox th {
	border: 1px solid #ff5555;
	padding: 3px 4px;
}
table.infobox2 tbody td {
	font-size: 13px;
}
table.infobox2 td:nth-child(even) {
	background: #ebcccc;
}
table.infobox2 thead {
	background: #ffffff;
	border-bottom: 4px solid #333333;
}
table.infobox2 thead th {
	font-size: 15px;
	font-weight: bold;
	color: #333333;
	text-align: center;
	border-left: 2px solid #333333;
}
table.infobox2 thead th:first-child {
	border-left: none;
}

table.infobox2 tfoot {
	font-size: 14px;
	font-weight: bold;
	color: #333333;
	border-top: 4px solid #333333;
}
table.infobox2 tfoot td {
	font-size: 14px;
}

.nodes circle {
	stroke: #fff;
	stroke-width: 1.5px;
}

.svg-container {
	display: inline-block;
	position: relative;
	width: 100%;
	padding-bottom: 100%; /* aspect ratio */
	vertical-align: top;
	overflow: hidden;
}
.svg-content-responsive {
	display: inline-block;
	position: absolute;
	top: 10px;
	left: 0;
}
.pass {
	stroke-dasharray: 10;
	animation: dash 1s linear infinite;
}
@keyframes dash {
	to {
		stroke-dashoffset: -100;
	}
}
</style>
