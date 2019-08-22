<template>
	<div id="pos-scence">
		<!-- <h1>车押Pos</h1> -->
		<a-row>
			<a-col>
				<a-col :span="12">
					<a-row type="flex" justify="space-between" class="overview">
						<a-col :span="7">
							<IndexLine type="接入量" now-value="20,301" />
						</a-col>
						<a-col :span="7">
							<IndexLine type="交易量" now-value="35,301" />
						</a-col>
						<a-col :span="7">
							<IndexLine type="收益率" now-value="27,301" />
						</a-col>
					</a-row>
					<a-card title="分行分布情况" :bordered="false" :style="cardStyle">
						<MapChart />
					</a-card>
				</a-col>
				<a-col :span="12">
					<a-card title="每日交易量" :bordered="false" :style="cardStyle">
						<TransitionTradeLine />
					</a-card>
					<a-card title="分行交易量" :bordered="false" :style="cardStyle">
						<Barchart />
					</a-card>
				</a-col>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import MapChart from "../baseCharts/mapChart/MapChart.vue";
import TransitionTradeLine from "../baseCharts/lineChart/TransitionTradeLine.vue";
import Barchart from "../baseCharts/hightCharts/BarChart.vue";

import IndexLine from "../baseCharts/lineChart/IndexLine.vue";
import BaseBarChart from "../baseCharts/hightCharts/BaseBarChart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "PosScense",
	components: {
		Barchart,
		TransitionTradeLine,
		MapChart,
		IndexLine,
		BaseBarChart,
		MapChart
	},
	data() {
		return {
			cardStyle: {
				margin: "20px"
			},
			type: "3D"
		};
	},
	computed: {
		...mapGetters("chartdata", {
			params: "getParams"
		})
	},
	created() {
		this.resetParams();
	},
	mounted() {
		this.invokePushItems("Pos");
		this.hideTitle();
		this.params;
		this.insertAllData({
			posmap: [
				{
					name: "海门",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "鄂尔多斯",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "招远",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "舟山",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "齐齐哈尔",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "盐城",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "赤峰",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "青岛",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "乳山",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "金昌",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "泉州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "莱西",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "日照",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "胶南",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "南通",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "拉萨",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "云浮",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "梅州",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "文登",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "上海",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "攀枝花",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "威海",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "承德",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "厦门",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "汕尾",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "潮州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "丹东",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "太仓",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "曲靖",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "烟台",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "福州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "瓦房店",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "即墨",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "抚顺",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "玉溪",
					value: (Math.random() * 200).toFixed(2)
				},

				{
					name: "宁波",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "湛江",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "揭阳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "荣成",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "连云港",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "葫芦岛",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "常熟",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "东莞",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "河源",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "淮安",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "泰州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "南宁",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "营口",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "惠州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "江阴",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "蓬莱",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "韶关",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "嘉峪关",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "广州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "延安",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "太原",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "清远",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "中山",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "昆明",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "寿光",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "盘锦",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "长治",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "深圳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "珠海",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "宿迁",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "咸阳",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "铜川",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "平度",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "佛山",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "海口",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "江门",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "章丘",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "肇庆",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "大连",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "临汾",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "吴江",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "石嘴山",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "沈阳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "苏州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "茂名",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "嘉兴",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "长春",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "胶州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "银川",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "张家港",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "三门峡",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "锦州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "南昌",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "柳州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "三亚",
					value: (Math.random() * 300).toFixed(2)
				},
				{
					name: "自贡",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "吉林",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "阳江",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "泸州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "西宁",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "宜宾",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "呼和浩特",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "成都",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "大同",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "镇江",
					value: (Math.random() * 100).toFixed(2)
				},
				{
					name: "桂林",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "张家界",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "宜兴",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "北海",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "西安",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "金坛",
					value: (Math.random() * 200).toFixed(2)
				},

				{
					name: "包头",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "绵阳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "乌鲁木齐",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "枣庄",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "杭州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "淄博",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "鞍山",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "溧阳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "库尔勒",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "安阳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "开封",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "济南",
					value: (Math.random() * 100).toFixed(2)
				},
				{
					name: "德阳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "温州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "九江",
					value: (Math.random() * 100).toFixed(2)
				},
				{
					name: "邯郸",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "临安",
					value: (Math.random() * 100).toFixed(2)
				},
				{
					name: "兰州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "沧州",
					value: (Math.random() * 200).toFixed(2)
				},

				{
					name: "秦皇岛",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "株洲",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "石家庄",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "莱芜",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "常德",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "保定",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "湘潭",
					value: (Math.random() * 100).toFixed(2)
				},
				{
					name: "金华",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "岳阳",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "长沙",
					value: (Math.random() * 100).toFixed(2)
				},
				{
					name: "衢州",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "廊坊",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "菏泽",
					value: (Math.random() * 100).toFixed(2)
				},
				{
					name: "合肥",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "武汉",
					value: (Math.random() * 200).toFixed(2)
				},
				{
					name: "大庆",
					value: (Math.random() * 200).toFixed(2)
				}
			]
		});
		this.insertAllData({
			barchat: {
				categories: [
					"广东",
					"广西",
					"上海",
					"北京",
					"河北",
					"云南",
					"陕西",
					"贵州",
					"湖南"
				],
				series: [
					{
						name: "活跃",
						type: "bar",
						stack: "活跃",
						data: [220, 333, 553, 245, 243, 521, 152, 357, 854]
					},
					{
						name: "不活跃",
						type: "bar",
						stack: "活跃",
						data: [220, 211, 443, 74, 26, 267, 23, 8, 569]
					}
				]
			}
		});
	},
	methods: {
		...mapActions("breadcrumb", ["hideTitle", "invokePushItems"]),
		...mapActions("chartdata", ["insertAllData", "resetParams"])
	}
};
</script>
<style scoped>
.overview {
	margin: 20px;
}
h1 {
	text-align: center;
}
#pos-scence >>> .overview .ant-card {
	border-radius: 0px;
}
#pos-scence >>> .ant-card {
	border-radius: 20px;
}
#pos-scence >>> .ant-card-head {
	border-bottom: 0px;
	font-size: xx-large;
	padding-top: 20px;
}
#pos-scence >>> .ant-card-body {
	padding: 0px;
}
#pos-scence >>> .ant-card-head-title {
	padding: 0px;
}
</style>
