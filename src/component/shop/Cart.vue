<template>
	<div class="contain">
		<div class="topArea">
			<a-row style="width:100%">
				<a-col :span="8" />
				<a-col
					:span="8"
					style="display:flex;height:100%;align-items: center;justify-content: center;"
				>
					<h1>Cart</h1>
				</a-col>
				<a-col :span="8" />
			</a-row>
		</div>
		<div class="middleArea">
			<a-list item-layout="horizontal" :data-source="cartData">
				<a-list-item slot="renderItem" slot-scope="item, index">
					<a slot="title">{{ "name" }}</a>
					<div class="itemList">
						<img class="itemImg" alt="sss" src="../../picture/pad.png" />
						<div width="30%">name: 2</div>
						<a-list-item-meta width="30%" description="price: 2" />
						<a-button type="danger">DELETE</a-button>
					</div>
				</a-list-item>
			</a-list>
			<div class="itemList" style="padding-top:30px">
				<a-button class="btn" type="primary">Pay now</a-button>
				<a-button class="btn" @click="$router.push('HomePage')">Back</a-button>
			</div>
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
Vue.use(Button);

export default {
	name: "RegistPage",
	components: {},
	data() {
		return {
			cartData: [1, 2],
			formItemLayout: {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 8 }
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 16 }
				}
			},
			tailFormItemLayout: {
				wrapperCol: {
					xs: {
						span: 24,
						offset: 0
					},
					sm: {
						span: 16,
						offset: 8
					}
				}
			}
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
	border-bottom: 1px #c3c3c3 solid;
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
.itemImg {
	max-height: 50px;
	max-width: 50px;
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
}

.middleArea {
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	border-top: 1px #c3c3c3 solid;
}

h1 {
	text-align: center;
}
.itemList {
	display: flex;
	width: 600px;
	justify-content: space-around;
}
.itemList > div {
	flex: 0 0 30%;
}
</style>
