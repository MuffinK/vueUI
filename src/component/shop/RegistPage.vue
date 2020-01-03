<template>
	<div class="contain">
		<div class="topArea">
			<a-row style="width:100%">
				<a-col :span="8" />
				<a-col
					:span="8"
					style="display:flex;height:100%;align-items: center;justify-content: center;"
				>
					<h1>REGIST</h1>
				</a-col>
				<a-col :span="8" />
			</a-row>
		</div>
		<div class="middleArea">
			<a-form :form="form" @submit="handleSubmit">
				<a-form-item v-bind="formItemLayout" label="E-mail">
					<a-input
						v-decorator="[
							'email',
							{
								rules: [
									{
										type: 'email',
										message: 'The input is not valid E-mail!'
									},
									{
										required: true,
										message: 'Please input your E-mail!'
									}
								]
							}
						]"
					/>
				</a-form-item>
				<a-form-item v-bind="formItemLayout" label="Password">
					<a-input
						v-decorator="[
							'password',
							{
								rules: [
									{
										required: true,
										message: 'Please input your password!'
									},
									{
										validator: validateToNextPassword
									}
								]
							}
						]"
						type="password"
					/>
				</a-form-item>
				<a-form-item v-bind="formItemLayout" label="Confirm Password">
					<a-input
						v-decorator="[
							'confirm',
							{
								rules: [
									{
										required: true,
										message: 'Please confirm your password!'
									},
									{
										validator: compareToFirstPassword
									}
								]
							}
						]"
						type="password"
						@blur="handleConfirmBlur"
					/>
				</a-form-item>
				<a-form-item v-bind="formItemLayout">
					<span slot="label">
						Nickname&nbsp;
						<a-tooltip title="What do you want others to call you?">
							<a-icon type="question-circle-o" />
						</a-tooltip>
					</span>
					<a-input
						v-decorator="[
							'nickname',
							{
								rules: [
									{
										required: true,
										message: 'Please input your nickname!',
										whitespace: true
									}
								]
							}
						]"
					/>
				</a-form-item>
				<a-form-item v-bind="formItemLayout" label="Phone Number">
					<a-input
						v-decorator="[
							'phone',
							{
								rules: [
									{ required: true, message: 'Please input your phone number!' }
								]
							}
						]"
						style="width: 100%"
					>
						<a-select
							slot="addonBefore"
							v-decorator="['prefix', { initialValue: '86' }]"
							style="width: 70px"
						>
							<a-select-option value="86">
								+86
							</a-select-option>
							<a-select-option value="87">
								+87
							</a-select-option>
						</a-select>
					</a-input>
				</a-form-item>
				<a-form-item v-bind="formItemLayout" label="Website">
					<a-auto-complete
						v-decorator="[
							'website',
							{ rules: [{ required: true, message: 'Please input website!' }] }
						]"
						placeholder="website"
						@change="handleWebsiteChange"
					>
						<template slot="dataSource">
							<a-select-option
								v-for="website in autoCompleteResult"
								:key="website"
							>
								{{ website }}
							</a-select-option>
						</template>
						<a-input />
					</a-auto-complete>
				</a-form-item>
				<a-form-item
					v-bind="formItemLayout"
					label="Captcha"
					extra="We must make sure that your are a human."
				>
					<a-row :gutter="8">
						<a-col :span="12">
							<a-input
								v-decorator="[
									'captcha',
									{
										rules: [
											{
												required: true,
												message: 'Please input the captcha you got!'
											}
										]
									}
								]"
							/>
						</a-col>
						<a-col :span="12">
							<a-button>Get captcha</a-button>
						</a-col>
					</a-row>
				</a-form-item>
				<a-form-item v-bind="tailFormItemLayout">
					<a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
						I have read the
						<a href="">
							agreement
						</a>
					</a-checkbox>
				</a-form-item>
				<a-form-item v-bind="tailFormItemLayout">
					<a-button type="primary" html-type="submit">
						Register
					</a-button>
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
	name: "RegistPage",
	components: {},
	data() {
		return {
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
</style>
