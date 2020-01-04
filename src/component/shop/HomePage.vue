<template>
	<div class="contain">
		<TopArea />
		<div class="middleArea">
			<a-row style="width:100%;height:500px">
				<a-col
					:span="6"
					style="display:flex;flex-direction: column;height: 100%;}"
				>
					<div class="route">
						<a-button class="routeBtn" @click="toDetail">1</a-button>
						<a-button class="routeBtn">2</a-button>
						<a-button class="routeBtn">3</a-button>
						<a-button class="routeBtn">4</a-button>
						<a-button class="routeBtn">5</a-button>
					</div>
				</a-col>
				<a-col
					:span="18"
					style="display:flex;flex-direction: column;height: 100%;}"
				>
					<img class="homeImg" src="../../picture/canpus.jpg" >
				</a-col>
			</a-row>
			<a-row style="width:100%;height:200px">
				<a-col :span="8" style="height: 100%;}">
					<img class="bottomImg" alt="sss" src="../../picture/pad.png" >
				</a-col>
				<a-col :span="8" style="height: 100%;}">
					<img class="bottomImg" alt="sss" src="../../picture/door.png" >
				</a-col>
				<a-col :span="8" style="height: 100%;}">
					<img class="bottomImg" alt="sss" src="../../picture/scien.jpg" >
				</a-col>
			</a-row>
			<BottomArea />
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
import TopArea from "./TopArea.vue";
import BottomArea from "./BottomArea.vue";
Vue.use(Button);

export default {
	name: "HomePage",
	components: { TopArea, BottomArea },
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
.contain {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.topArea {
	height: 150px;
	width: 100%;
	background-color: aquamarine;
	display: flex;
}

.contact {
	font-size: 17px;
}

.logoImg {
	height: 150px;
	width: 150px;
	margin-left: 100px;
}

.shopCarBtn {
	height: 40px;
	width: 60px;
	margin-right: 20px;
	margin-top: auto;
	margin-bottom: auto;
}

.btn {
	margin-right: 40px;
	width: 150px;
	height: 40px;
	margin-top: auto;
	margin-bottom: auto;
}

.middleArea {
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
}

.route {
	padding: 20px;
	flex: 1;
	display: flex;
	flex-direction: column;
}

.routeBtn {
	flex: 1;
}

.homeImg {
	padding: 40px;
	flex: 1;
}

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
