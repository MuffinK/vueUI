<template>
	<div class="bottomArea">
		<a-col :span="16" />
		<a-col
			:span="8"
			style="display:flex;flex-direction: column;align-items: center;justify-content: center;}"
		>
			<div class="contact">
				contact details
			</div>
			<div class="contact">
				Mobile phone: xxxxxxxxx
			</div>
			<div class="contact">
				Email: xxxxxxxx
			</div>
		</a-col>
	</div>
</template>
<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
import TopArea from "./TopArea.vue";
Vue.use(Button);

export default {
	name: "HomePage",
	components: { TopArea },
	data() {
		return {
			cardStyle: {
				margin: "20px"
			},
			type: "3D",
			onlineNumber: "1"
		};
	},
	created() {},
	mounted() {},
	methods: {
		login() {
			this.$router.push("LoginPage");
		},
		toDetail() {
			this.$router.push("Detail");
		}
	}
};
</script>
<style scoped>
.bottomImg {
	height: 100%;
	width: auto;
	padding: 0 30px;
}

.bottomArea {
	height: 100px;
	width: 100%;
	display: flex;
	border: 1px #c3c3c3 solid;
}

h1 {
	text-align: center;
}
</style>
