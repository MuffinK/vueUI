<template>
	<div class="contain">
		<div class="topArea">
			<div class="topArea">
				<a-row style="width:100%">
					<a-col :span="8">
						<img class="logoImg" src="../../icons/up.png" />
					</a-col>
					<a-col :span="8" />
					<a-col :span="8" style="display:flex;height:100%">
						<a-button class="btn" @click="toLogin">login</a-button>
						<a-button class="btn" @click="toRegist">regist</a-button>
						<a-button class="btn">online number: {{ onlineNumber }}</a-button>
						<a-button icon="shop" class="shopCarBtn" />
					</a-col>
				</a-row>
			</div>
		</div>
		<div class="middleArea">
			<div class="detail">
				<div class="item">
					<img class="itemImg" alt="sss" src="../../picture/pad.png" >
				</div>
				<div class="detailArea">
					<div class="itemTitle">name</div>
					<div class="itemPrice">¥99.99</div>
					<div id="btns">
						<a-button v-if="role == 'custome'" class="btn" @click="addToBasket"
							>Add to basket</a-button
						>
						<a-button v-if="role == 'none'" class="btn" @click="toLogin"
							>Login</a-button
						>
						<a-button v-if="role == 'admin'" class="btn" @click="toModify"
							>Modify</a-button
						>
						<a-button v-if="role == 'admin'" class="btn" @click="toDelete"
							>Delete</a-button
						>
					</div>
					<a-button class="btn" @click="$router.push('HomePage')"
						>Back</a-button
					>
				</div>
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
export default {
	name: "Item",
	data() {
		return {
			role: "none"
		};
	},
	mounted() {
		this.role = localStorage["role"] || "none";
	},
	methods: {
		toLogin() {
			this.$router.push("LoginPage");
		},
		toRegist() {
			this.$router.push("RegistPage");
		}
	}
};
</script>
<style scoped>
.item {
	height: 200px;
	width: 300px;
	display: flex;
	flex-direction: row;
	border: 1px #c3c3c3 solid;
}

.detailArea {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.itemImg {
	/* width: 150px; */
	/* height: 150px; */
	margin: 5%;
	max-width: 90%;
	max-height: 90%;
	/* margin-top: auto; */
	/* margin-bottom: auto; */
}

.itemTitle {
	font-size: 26px;
}

.itemPrice {
	font-size: 20px;
	color: #fa5454;
}

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
	padding: 20px;
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
.detail {
	display: flex;
}
#btns {
	display: flex;
}
</style>
