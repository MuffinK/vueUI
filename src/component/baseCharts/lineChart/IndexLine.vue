<template>
	<div id="index-line">
		<a-card hoverable>
			<NoBoundaryLine />
			<a-card-meta>
				<template slot="description">
					<div class="title">
						<h2>
							{{ nowValue }}
							<span
								style="padding-left: 15px;color: green;font-size:small;margin-botton: 10px"
							>
								<img :src="up" style="width: 20px" />15%
							</span>
						</h2>

						<div style="font-size: small;">{{ type }}</div>
					</div>
				</template>
			</a-card-meta>
		</a-card>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import IotTitle from "../../baseLayout/IotTitle.vue";
import SmallGraph from "../../baseLayout/SmallGraph.vue";
import { default as up } from "../../../icons/up.png";
import NoBoundaryLine from "../lineChart/NoBoundaryLine.vue";

@Component({
	components: {
		IotTitle,
		NoBoundaryLine
	}
})
export default class TransitionTradeLine extends Mixins(SmallGraph) {
	@Prop({ default: "" }) readonly title!: string;
	@Prop({ default: "" }) readonly type!: string;
	@Prop({ default: "" }) readonly nowValue!: string;
	up = up;
}
</script>
<style scoped>
div#index-line >>> .ant-card-body {
	padding: 0;
}
.title {
	padding: 30px;
}
</style>
