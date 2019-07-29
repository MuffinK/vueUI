<template>
	<div>
		<div v-if="showArr[0] === 1">
			<div class="search">
				<a-input-search
					placeholder="请输入线路名称"
					size="large"
					@search="onSearch"
				>
					<a-button slot="enterButton" icon="search">确定</a-button>
				</a-input-search>
			</div>
			<div>
				<a-table
					:columns="columns"
					:data-source="data"
					:row-selection="rowSelection"
					bordered
				>
					<a slot="action" href="javascript:;">编辑</a>
				</a-table>
			</div>
			<div v-if="click">
				<a-alert
					type="error"
					message="未选中任何数据"
					close-text="关闭"
					show-icon="true"
					close="closeClick"
				/>
			</div>
			<div align="left">
				<span>
					<a-button
						class="btn"
						type="primary"
						icon="check-circle"
						@click="toEdit"
						>执行</a-button
					>
					<a-button class="btn" type="primary" icon="plus-circle" @click="toAdd"
						>新增</a-button
					>
					<a-button class="btn" type="danger" icon="delete" @click="showModal"
						>删除</a-button
					>
					<a-modal
						v-model="deleteVisible"
						title="确认要删除吗？"
						@ok="handleOk"
					>
						123
					</a-modal>
				</span>
			</div>
			<!-- <div :is="info" /> -->
		</div>
		<div v-else-if="showArr[1] === 1">
			<AddCarInfo />
		</div>
		<div v-else="">
			<EditCarInfo />
		</div>
	</div>
</template>

<script>
const columns = [
	{
		title: "线路名称",
		dataIndex: "routeName",
		key: "routeName",
		width: "45%",
		align: "center"
	},
	{
		title: "线路编号",
		dataIndex: "routeNo",
		key: "routeNo",
		width: "45%",
		align: "center"
	},
	{
		title: "操作",
		dataIndex: "",
		key: "x",
		width: "10%",
		align: "center",
		scopedSlots: { customRender: "action" }
	}
];

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		// console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		length = selectedRows.length;
	},
	onSelect: (record, selected, selectedRows) => {
		// console.log(record, selected, selectedRows);
	},
	onSelectAll: (selected, selectedRows, changeRows) => {
		// console.log(selected, selectedRows, changeRows);
	}
};
import axios from "axios";
import AddCarInfo from "./AddCarInfo";
import EditCarInfo from "./EditCarInfo";

export default {
	components: {
		AddCarInfo,
		EditCarInfo
	},
	data() {
		return {
			// info: "AddCarInfo",
			columns,
			data: [{ routeName: "1", routeNo: "2" }],
			rowSelection,
			showArr: [1, 0, 0], // 位置1，ListAllCarInfo；位置2，AddCarInfo，位置3，EditCarInfo
			deleteVisible: false,
			click: 0
		};
	},
	computed: {
		length: {
			get: function(length) {
				return length;
			},
			set: function(val) {
				length = val;
			}
		}
	},
	mounted() {
		//请求站点
		axios
			.post(
				"/icbc/cocoa/json/com.icbc.iotp.escort.service.IEscortRSManageService/1.0/qrySiteList",
				[{ struId: "0100103230" }]
			)
			.then(response => {
				var siteList = response.data;
			})
			.catch(error => {
				console.log(error);
			});
	},
	updated() {
		console.log(this.showArr);
	},
	methods: {
		closeClick() {
			this.click = 0;
		},
		onSearch(value) {
			console.log(value);
		},
		toEdit() {
			if (length === 0) {
				this.click = 1;
			} else {
				this.$set(this.showArr, 0, 0);
				this.$set(this.showArr, 2, 1);
			}
		},
		toAdd() {
			this.$set(this.showArr, 0, 0);
			this.$set(this.showArr, 1, 1);
		},
		showModal() {
			if (length === 0) {
				this.click = 1;
			} else {
				this.deleteVisible = true;
			}
		},
		handleOk(e) {
			//这里删除选中列的表。
			this.deleteVisible = false;
		}
	}
};
</script>
<style>
.btn {
	width: 355px;
}
.search {
	width: 100%;
}
</style>
