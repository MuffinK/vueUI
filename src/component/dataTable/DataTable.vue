<template>
	<a-table :columns="columns" :data-source="data">
		<!-- <template slot="name" slot-scope="name">
			{{ name.first }} {{ name.last }}
		</template> -->
	</a-table>
</template>
<script>
const columns = [
	{
		title: "Age",
		dataIndex: "age",
		key: "age"
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address"
	}
];

const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"]
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"]
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"]
	}
];

import LargeGraph from "../baseLayout/LargeGraph";
export default {
	name: "DataTable",
	mixins: [LargeGraph],
	data() {
		return {
			data: data,
			columns: columns
		};
	},
	mounted() {
		// this.fetch();
	},
	methods: {
		handleTableChange(pagination, filters, sorter) {
			const pager = { ...this.pagination };
			pager.current = pagination.current;
			this.pagination = pager;
			this.fetch({
				results: pagination.pageSize,
				page: pagination.current,
				sortField: sorter.field,
				sortOrder: sorter.order,
				...filters
			});
		}
	}
};
</script>
