<template>
	<div class="contain">
		<div class="topArea">
			<a-row style="width:100%">
				<a-col :span="8" />
				<a-col
					:span="8"
					style="display:flex;height:100%;align-items: center;justify-content: center;"
				>
					<h1>LOGIN</h1>
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
								rules: [
									{ required: true, message: 'Please input your username!' }
								]
							}
						]"
						placeholder="Username"
					>
						<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input
						v-decorator="[
							'password',
							{
								rules: [
									{ required: true, message: 'Please input your Password!' }
								]
							}
						]"
						type="password"
						placeholder="Password"
					>
						<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-checkbox
						v-decorator="[
							'remember',
							{
								valuePropName: 'checked',
								initialValue: true
							}
						]"
					>
						Remember me
					</a-checkbox>
					<a class="login-form-forgot">
						Forgot password
					</a>
					<a-button type="primary" class="login-form-button" html-type="submit">
						Log in
					</a-button>
					Or
					<a @click="$router.push('RegisterPage')">
						register now!
					</a>
				</a-form-item>
			</a-form>
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
			form: this.$form.createForm(this, { name: "coordinated" }),
			cardStyle: {
				margin: "20px"
			},
			type: "3D"
		};
	},
	created() {},
	mounted() {},
	methods: {
		handleSubmit() {
			this.form.validateFields((err, values) => {
				if (!err) {
					this.$notification.open({
						message: "Success",
						description: "Register Success, turn to home page now",
						onClose: () => {
							this.$router.push("HomePage");
						}
					});
					localStorage["role"] = "admin";
					console.log("Received values of form: ", values);
				}
			});
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
