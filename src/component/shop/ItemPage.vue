<template>
	<div class="contain">
		<div class="topArea">
			<a-row style="width:100%">
				<a-col :span="8" />
				<a-col
					:span="8"
					style="display:flex;height:100%;align-items: center;justify-content: center;"
				>
					<h1>TITLE</h1>
				</a-col>
				<a-col :span="8" />
			</a-row>
		</div>
		<div class="middleArea">
			<a-row style="width:100%;height:500px">
				<a-col
					:span="6"
					style="display:flex;flex-direction: column;height: 100%;}"
				>
					<div class="route">
						<a-button class="routeBtn">1</a-button>
						<a-button class="routeBtn">2</a-button>
						<a-button class="routeBtn">3</a-button>
						<a-button class="routeBtn">4</a-button>
						<a-button class="routeBtn">5</a-button>
					</div>
				</a-col>
				<a-col
					:span="18"
					style="display:flex;height: 100%;padding: 20px;flex-wrap: wrap;justify-content: space-between;}"
				>
					<Item />
					<Item />
					<Item />
					<Item />
				</a-col>
			</a-row>
			<a-row style="width:100%;height:200px">
				<a-col
					:span="8"
					style="height: 100%;display:flex;align-items: center;justify-content: center;}"
				>
					<a-button type="primary">ADD NEW ONE</a-button>
				</a-col>
				<a-col :span="8" style="height: 100%;}" />
				<a-col
					:span="8"
					style="height: 100%;display:flex;align-items: center;justify-content: center;}"
				>
					<a-button type="primary">BACK</a-button>
				</a-col>
			</a-row>
		</div>
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
	</div>
</template>
<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
import Item from "./Item";
Vue.use(Button);

export default {
	name: "ItemPage",
	components: {
		Item
	},
	data() {
		return {
			cardStyle: {
				margin: "20px"
			},
			type: "3D"
		};
	},
	created() {},
	mounted() {},
	methods: {}
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
	height: 240px;
	width: 430px;
	padding: 30px;
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
