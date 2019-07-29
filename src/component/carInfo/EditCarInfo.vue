<template>
	<div align="left">
		<h3>押运线路执行</h3>
		<div class="input_module">
			<span class="star">*</span>
			<span class="in" display:inline>
				线路名称：
				<a-input placeholder="请输入线路名称" />
			</span>
		</div>
		<br >
		<div class="input_module">
			<span class="star">*</span>
			<span>
				押运设置：
				<!-- 这里需要加数据 -->
				<a-select class="select1" default-value="lucy">
					<a-select-option value="jack">Jack</a-select-option>
					<a-select-option value="lucy">Lucy</a-select-option>
					<a-select-option value="Yiminghe">yiminghe</a-select-option>
				</a-select>
				<a-select class="select2" mode="tags" :token-separators="[',']">
					<a-select-option value="a">a</a-select-option>
					<a-select-option value="b">b</a-select-option>
					<a-select-option value="c">c</a-select-option>
				</a-select>
			</span>
		</div>
		<br />
		<div class="input_module">
			<span class="star">*</span>
			<span>
				服务时间：
				<a-time-picker
					:default-value="moment('09:00', 'HH:mm')"
					format="HH:mm"
				/>
				~
				<a-time-picker
					:default-value="moment('17:00', 'HH:mm')"
					format="HH:mm"
				/>
			</span>
		</div>
		<br />
		<div>
			<span class="star">*</span>
			<span>
				起止站点：
				<a-select class="select3" default-value="lucy">
					<a-select-option value="jack">Jack</a-select-option>
					<a-select-option value="lucy">Lucy</a-select-option>
					<a-select-option value="Yiminghe">yiminghe</a-select-option>
				</a-select>
				<a-select class="select3" default-value="lucy">
					<a-select-option value="jack">Jack</a-select-option>
					<a-select-option value="lucy">Lucy</a-select-option>
					<a-select-option value="Yiminghe">yiminghe</a-select-option>
				</a-select>
			</span>
		</div>
		<br />
		<div class="input_module">
			<span display:inline>
				<a-button class="btns1" type="default" icon="plus-circle"
					>添加站点</a-button
				>
				<a-button class="btns1" type="default" icon="environment"
					>预览路线</a-button
				>
			</span>
		</div>
		<br />
		<div class="input_module">
			<a-list item-layout="horizontal" :data-source="data">
				<a-list-item slot="renderItem" slot-scope="item, index">
					<a-list-item-meta>
						<div slot="header">this is Header</div>
						<a slot="title">{{ item.title }}</a>
					</a-list-item-meta>
				</a-list-item>
			</a-list>
		</div>
		<span>
			<a-button class="btns2" type="primary" icon="check-circle" @click="commit"
				>提交</a-button
			>
			<a-button class="btns2" type="default" icon="close" @click="cancel"
				>取消</a-button
			>
		</span>
	</div>
</template>
<script>
import moment from "moment";
export default {
	data() {
		return {
			showArr: [0, 0, 1],
			data: [
				{ title: "Title 1" },
				{ title: "Title 2" },
				{ title: "Title 3" },
				{ title: "Title 4" }
			]
		};
	},
	methods: {
		moment,
		commit() {
			this.$parent.showArr = [1, 0, 0];
			this.$parent.length = 0;
			this.$parent.click = 0;
		},
		cancel() {
			this.$parent.showArr = [1, 0, 0];
			this.$parent.length = 0;
			this.$parent.click = 0;
		}
	}
};
</script>
<style>
.input_module {
	width: 600px;
	margin-top: 5px;
	margin-bottom: 5px;
}
.star {
	color: red;
	display: inline;
}
.ant-input {
	width: 450px;
}
.select1 {
	width: 150px;
}
.select2 {
	width: 300px;
}
.select3 {
	width: 225px;
}
.btns1 {
	width: 100px;
}
.btns2 {
	width: 300px;
}
</style>
