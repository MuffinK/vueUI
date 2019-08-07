<script>
// import Style from "../baseLayout/BaseGraphStyle";
export default {
	name: "SmallGraph",
	// mixins: [Style],
	data() {
		return {
			height: "175",
			padding: [10, 10, 10, 10]
		};
	}
};
</script>
<style module>
.smallGraph {
	composes: baseGraph from "../baseLayout/BaseGraphStyle.css";
	height: 195px;
}
</style>
