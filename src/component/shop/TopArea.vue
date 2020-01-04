<template>
	<div class="topArea">
		<a-row style="width:100%">
			<a-col :span="8">
				<img class="logoImg" src="../../icons/up.png" >
			</a-col>
			<a-col :span="4" />
			<a-col :span="8" style="display:flex;height:100%">
				<a-button
					v-if="role == 'none'"
					class="btn"
					@click="$router.push('LoginPage')"
					>login</a-button
				>
				<a-button
					v-if="role == 'none'"
					class="btn"
					@click="$router.push('RegisterPage')"
					>register</a-button
				>
				<a-button class="btn">online number: {{ onlineNumber }}</a-button>
				<a-button v-if="role != 'none'" class="btn" @click="logout"
					>log out
				</a-button>
				<a-button
					v-if="role == 'customer'"
					icon="shop"
					class="shopCarBtn"
					@click="$router.push('Cart')"
				/>
			</a-col>
		</a-row>
	</div>
</template>
<script>
export default {
	name: "TopArea",
	components: {},
	data() {
		return {
			cardStyle: {
				margin: "20px"
			},
			type: "3D",
			onlineNumber: "1",
			role: "none"
		};
	},
	created() {},
	mounted() {
		this.role = localStorage["role"] || "none";
	},
	methods: {
		logout() {
			this.role = "none";
			localStorage["role"] = "none";
			this.$router.push("HomePage");
		}
	}
};
</script>
<style scoped>
.topArea {
	height: 100px;
	width: 100%;
	background-color: aquamarine;
	display: flex;
}

.logoImg {
	height: 100px;
	width: 100px;
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
</style>
