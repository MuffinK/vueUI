<template>
	<div class="contain">
		<div class="topArea">
			<a-row style="width:100%">
				<a-col :span="8" />
				<a-col
					:span="8"
					style="display:flex;height:100%;align-items: center;justify-content: center;"
				>
					<h1>Modify</h1>
				</a-col>
				<a-col :span="8" />
			</a-row>
		</div>
		<div class="middleArea">
			<a-form
				id="components-form-demo-normal-login"
				:form="form"
				class="login-form"
				@submit="handleSubmit"
			>
				<a-form-item>
					<a-input
						v-decorator="[
							'userName',
							{
								rules: [{ required: true, message: 'Please input name!' }]
							}
						]"
						placeholder="Name"
					>
						<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input
						v-decorator="[
							'userName',
							{
								rules: [{ required: true, message: 'Please input Type!' }]
							}
						]"
						placeholder="Type"
					/>
				</a-form-item>
				<a-form-item>
					<a-input
						v-decorator="[
							'Price',
							{
								rules: [{ required: true, message: 'Please input Price!' }]
							}
						]"
						type="number"
						placeholder="Price"
					/>
				</a-form-item>

				<a-button type="primary" class="login-form-button">
					save
				</a-button>
			</a-form>
			<a-button class="btn" @click="$router.push('HomePage')">Back</a-button>
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
	name: "LoginPage",
	components: {},
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
	methods: {
		regist() {
			this.$router.push("RegistPage");
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
#components-form-demo-normal-login .login-form {
	max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
	float: right;
}
#components-form-demo-normal-login .login-form-button {
	width: 100%;
}
</style>
