<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import IotTitle from "../baseLayout/IotTitle.vue";

@Component({
	components: {
		IotTitle
	}
})
export default class LargeGraphGraph extends Vue {
	@Prop({ default: "title" }) readonly title!: string;
	height = 175 * 2;
	padding = [10, 10, 10, 10];
}
</script>
<style module>
.LargeGraph {
	composes: baseGraph from "../baseLayout/BaseGraphStyle.css";
	height: 400px;
	width: -webkit-calc(100% - 10px);
}
</style>
