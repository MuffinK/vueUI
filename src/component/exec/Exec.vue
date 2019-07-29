<template>
	<div id="drawer">
		<a-button
			type="default"
			icon="menu-unfold"
			shape="circle"
			@click="showDrawer"
		/>
		<a-drawer
			title="押运车线路执行"
			placement="left"
			:closable="true"
			:visible="visible"
			:mask-closable="false"
			:mask="false"
			width="640px"
			@close="onClose"
		>
			<a-form layout="inline" :form="form" @submit="handleSubmit">
				<div class="drawer">
					<a-form-item label="线路名称">
						<a-input
							v-decorator="[
								'routename',
								{ rules: [{ required: true, message: '线路名称必输' }] }
							]"
							placeholder="请输入线路名称"
							style="width: 480px"
						/>
					</a-form-item>
				</div>
				<div class="drawer">
					<a-form-item label="押运设置">
						<a-select
							v-decorator="[
								'carid',
								{ rules: [{ required: true, message: '押运车辆必输' }] }
							]"
							style="width: 120px"
							@change="handleSelectChange"
						>
							<a-select-option
								v-for="(car, index) in carlist"
								:key="index"
								:value="car"
								>{{ car }}</a-select-option
							>
						</a-select>
					</a-form-item>
					<a-form-item>
						<a-select
							v-decorator="[
								'people',
								{ rules: [{ required: true, message: '押运人员必输' }] }
							]"
							mode="tags"
							style="width: 340px"
							:token-separators="[',']"
							placeholder="押运人员，可多选"
							@change="handleSelectChange"
						>
							<a-select-option
								v-for="(people, index) in peopleList"
								:key="index"
								:value="people"
								>{{ people }}</a-select-option
							>
						</a-select>
					</a-form-item>
				</div>
				<div class="drawer">
					<a-form-item label="服务时间">
						<a-time-picker
							v-decorator="[
								'starttime',
								{ rules: [{ required: true, message: '服务开始时间必输' }] }
							]"
							format="HH:mm"
							@change="handleSelectChange"
						/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~
					</a-form-item>
					<a-form-item>
						<a-time-picker
							v-decorator="[
								'endtime',
								{ rules: [{ required: true, message: '服务结束时间必输' }] }
							]"
							placeholder="选择结束时间"
							format="HH:mm"
							@change="handleSelectChange"
						/>
					</a-form-item>
				</div>
				<div class="drawer">
					<a-form-item label="起止站点">
						<a-select
							v-decorator="[
								'startsite',
								{ rules: [{ required: true, message: '起点必输' }] }
							]"
							style="width: 228px"
							@change="handleSelectChange"
						>
							<a-select-option
								v-for="(routesite, index) in RouteSiteList"
								:key="index"
								:value="routesite"
								>{{ routesite }}</a-select-option
							>
						</a-select>
					</a-form-item>
					<a-form-item>
						<a-select
							v-decorator="[
								'endsite',
								{ rules: [{ required: true, message: '终点必输' }] }
							]"
							style="width: 228px"
							@change="handleSelectChange"
						>
							<a-select-option
								v-for="(routesite, index) in RouteSiteList"
								:key="index"
								:value="routesite"
								>{{ routesite }}</a-select-option
							>
						</a-select>
					</a-form-item>
				</div>
				<div id="execdate" class="drawer">
					<span style="color:#F00">*</span> 执行日期：
					<a-radio-group v-model="exedate">
						<a-radio :value="1">今天</a-radio>
						<a-radio :value="2">明天</a-radio>
					</a-radio-group>
				</div>
				<div id="drawline">
					<a-button style="width: 100px" type="default" icon="environment"
						>预览路线</a-button
					>
				</div>
				<div id="exectable">
					<Container @drop="onDrop">
						<a-table
							:columns="columns"
							:data-source="data"
							:bordered="true"
							:pagination="pagination"
						>
							<Draggable v-for="(item, index) in data" :key="index">{{
								item
							}}</Draggable>
							<a slot="action" href="javascript:;">Delete</a>
						</a-table>
					</Container>
				</div>
				<div class="drawer">
					<a-form-item>
						<a-button
							style="width: 280px"
							type="primary"
							html-type="submit"
							icon="check-circle"
							@click="commit"
							>提交</a-button
						>
					</a-form-item>
					<a-button
						style="width: 280px"
						type="default"
						icon="close"
						@click="onClose"
						>取消</a-button
					>
				</div>
			</a-form>
		</a-drawer>
	</div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Container, Draggable } from "vue-smooth-dnd";
import moment from "moment";
import debug from "debug";
const log = debug("iot-map:log");

const columns = [
	{
		title: "站点名称（拖动可调整顺序）",
		dataIndex: "sitename",
		key: "sitename"
	},
	{ title: "是否有订单", dataIndex: "order", key: "order" },
	{
		title: "操作",
		dataIndex: "",
		key: "x",
		scopedSlots: { customRender: "action" }
	}
];

export default {
	name: "",
	components: { Container, Draggable },
	data() {
		return {
			visible: false,
			exedate: 1,
			data: [],
			columns: columns,
			routename1: "",
			carid1: "",
			carlist: [],
			people1: "",
			people2: [],
			peopleList: [],
			peopleList1: [],
			starttime1: "",
			endtime1: "",
			startsite1: "",
			endsite1: "",
			RouteSiteList: [],
			SiteName: [],
			OrderFlag: [],
			pagination: {
				pageSize: 5,
				showSizeChanger: true,
				pageSizeOptions: ["5", "10", "15"],
				showSizeChange: (current, pageSize) => (this.pageSize = pageSize)
			},
			formLayout: "horizontal",
			form: this.$form.createForm(this)
		};
	},
	mounted() {},
	methods: {
		moment,
		async getDetail() {
			const response = await axios.get(
				"/icbc/iot/route/detail?routeNo=22019050510393446347&orderFlag=0"
			);
			for (var i = 0; i < response.data.data.routePersons.length; i++) {
				this.peopleList1[i] = response.data.data.routePersons[i].personName;
			}
			this.routename1 = response.data.data.route.routeName;

			var starttime2 = response.data.data.route.servBeginTime;
			var endtime2 = response.data.data.route.servEndTime;
			var starttime3 = starttime2.substring(0, 5);
			var endtime3 = endtime2.substring(0, 5);
			var start = moment(starttime3, "HH:mm");
			var end = moment(endtime3, "HH:mm");
			this.starttime1 = start;
			this.endtime1 = end;

			this.startsite1 = response.data.data.route.startSiteNo;
			this.endsite1 = response.data.data.route.endSiteNo;

			this.carid1 = response.data.data.route.carId;
			this.people2 = this.peopleList1;

			this.form.setFieldsValue({
				routename: this.routename1,
				people: this.people2,
				carid: this.carid1,
				starttime: this.starttime1,
				endtime: this.endtime1,
				startsite: this.startsite1,
				endsite: this.endsite1
			});
		},
		async getCarList() {
			const response = await axios.get(
				"icbc/iot/route/cash/car/list?struId=0100103230"
			);
			for (var i = 0; i < response.data.data.length; i++) {
				this.carlist[i] = response.data.data[i].carId;
			}
		},
		async getPersonList() {
			const response = await axios.get(
				"icbc/iot/route/cash/person/list?struId=00100100"
			);
			var list = [];
			for (var i = 0; i < response.data.data.length; i++) {
				list[i] = response.data.data[i].personName;
			}
			this.peopleList = list;
		},
		async getRouteSites() {
			const response = await axios.get("icbc/iot/route/sites?struId=00100100");
			var list = [];
			for (var i = 0; i < response.data.data.length; i++) {
				list[i] = response.data.data[i].siteName;
				var jsonObj = {};
				this.SiteName[i] = response.data.data[i].siteName;
				this.OrderFlag[i] = response.data.data[i].orderFlag;
				jsonObj.sitename = this.SiteName[i];
				jsonObj.order = this.OrderFlag[i];
				jsonObj.key = this.SiteName[i];
				this.data.push(jsonObj);
			}
			this.data.push({ sitename: "1111111", order: "不存在的测试线路" });
			this.RouteSiteList = list;
		},

		async showDrawer() {
			this.visible = true;
			await this.getDetail();
			await this.getCarList();
			await this.getPersonList();
			await this.getRouteSites();
		},
		onClose() {
			this.visible = false;
		},
		commit() {
			this.$parent.arr = [1, 0, 0];
			this.$parent.length = 0;
		},
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					log("Received values of form: ", values);
				}
			});
		},
		handleSelectChange(value) {
			log(value);
			this.form.setFieldsValue({
				note: `Hi, ${value === "male" ? "man" : "lady"}!`
			});
		},
		onDrop(diffData) {
			let itemAdd =
				diffData.removedIndex === null
					? diffData.payload
					: this.data.splice(diffData.removedIndex, 1)[0];
			diffData.addedIndex !== null &&
				this.data.splice(diffData.addedIndex, 0, itemAdd);
		}
	}
};
</script>
<style>
.drawer {
	width: 590px;
	height: 40px;
	margin-bottom: 24px;
}
#show {
	position: absolute;
	left: 10;
	top: 3%;
}
</style>
