<script>
// import Style from "../baseLayout/BaseGraphStyle";
export default {
	name: "MediumGraphGraph",
	// mixins: [Style],
	data() {
		return {
			height: 175,
			padding: [10, 10, 10, 10]
		};
	}
};
</script>
<style module>
.MediumGraph {
	composes: baseGraph from "../baseLayout/BaseGraphStyle.css";
	height: 195px;
	width: -webkit-calc(100% - 10px);
}
</style>
