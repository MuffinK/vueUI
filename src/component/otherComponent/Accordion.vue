<template>
	<div>
		<VueAccordion
			:items="items"
			:styles="styles"
			max-width="1200px"
			width="1200px"
		/>
	</div>
</template>
<script>
import { vueAccordion as VueAccordion } from "../../importComponents/vue-accordion/src/index";

import carPic from "../../picture/car.jpg";
import posPic from "../../picture/pos.jpg";
import padPic from "../../picture/pad.png";
import doorPic from "../../picture/door.png";
import canpusPic from "../../picture/canpus.jpg";
import parkPic from "../../picture/park.jpg";
import qfjPic from "../../picture/atm.jpg";
import tempPic from "../../picture/temp.jpg";
import canteenPic from "../../picture/canteen.jpg";
import scienPic from "../../picture/scien.jpg";
import { mapActions } from "vuex";

export default {
	name: "Accordion",
	components: {
		VueAccordion
	},
	data() {
		return {
			pics: {
				carPic
			},
			styles: {
				div: {
					height: "350px",
					margin: "auto"
				},
				h2: {
					opacity: "1",
					"writing-mode": "vertical-lr",
					height: "10ch"
				}
			},
			items: [
				{
					title: "车押",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: carPic
				},
				{
					title: "POS",
					text: "<div><div>text</div>sssss</div>",
					url: "#/Operating/PosScence",
					image: posPic
				},
				{
					title: "PAD",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: padPic
				},
				{
					title: "金库门禁",
					text:
						"<div><div>我是一段画我是一段画我是一段画我是一段画我是一段画我是一段画我是一段画我是一段画</div>我是一段画我是一段画我是一段画我是一段画我是一段画我是一段画我是一段画我是一段画</div>",
					url: "#",
					image: doorPic
				},
				{
					title: "食堂",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: canteenPic
				},
				{
					title: "寺庙",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: tempPic
				},
				{
					title: "景区",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: scienPic
				},
				{
					title: "停车场",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: parkPic
				},
				{
					title: "贵大",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: canpusPic
				},
				{
					title: "清分机",
					text: "<div><div>text</div>sssss</div>",
					url: "#",
					image: qfjPic
				}
			]
		};
	},
	mounted() {
		this.resetTitleArr(["场景介绍"]);
		this.showTitle();
	},
	methods: {
		...mapActions("breadcrumb", ["showTitle", "resetTitleArr"])
	}
};
</script>
<style scoped>
.vue-accordion {
	max-width: 1200px;
}
.vue-accordion ul:hover li:hover h2 {
	color: white;
}
</style>
