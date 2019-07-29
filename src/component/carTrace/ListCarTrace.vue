<template>
	<div>
		<Container @drop="onDrop">
			<!-- <a-list bordered :data-source="data"> -->
			<Draggable v-for="(item, index) in data" :key="index">
				{{ item }}
				<div @click="modal">aaa</div>
				<!-- <a-list-item slot-scope="item, index">{{ item }}</a-list-item> -->
			</Draggable>
			<div slot="header">Header</div>
			<div slot="footer">Footer</div>
			<!-- </a-list> -->
		</Container>
		<modal name="hello"><Hello /></modal>
	</div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import VueModal from "vue-js-modal";
import Vue from "vue";
import Hello from "../Hello.vue";
Vue.use(VueModal);
export default {
	name: "ListCarTrace",
	components: {
		Container,
		Draggable,
		Hello
	},
	data() {
		return {
			data: [
				"Racing car sprays burning fuel into crowd.",
				"Japanese princess to wed commoner.",
				"Australian walks 100km after outback crash.",
				"Man charged over missing wedding girl.",
				"Los Angeles battles huge wildfires."
			]
		};
	},
	methods: {
		onDrop(diffData) {
			let itemAdd =
				diffData.removedIndex === null
					? diffData.payload
					: this.data.splice(diffData.removedIndex, 1)[0];

			diffData.addedIndex !== null &&
				this.data.splice(diffData.addedIndex, 0, itemAdd);
		},
		modal() {
			this.$modal.show("hello");
		}
	}
};
</script>
