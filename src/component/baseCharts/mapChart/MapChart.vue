<style scoped>
.echarts {
	width: 100%;
	height: 500px;
}
</style>

<script>
import BaseEchart from "../../baseLayout/BaseEchart.vue";
import "./china.js";
import { mapGetters, mapActions } from "vuex";
export default {
	mixins: [BaseEchart],
	data() {
		return {
			options: {}
		};
	},
	computed: {
		...mapGetters("mapdata", {
			covertedData: "getCovertedData"
		})
	},
	mounted() {
		let data = [];
		for (let i = 0; i <= 360; i++) {
			let t = (i / 180) * Math.PI;
			let r = Math.sin(2 * t) * Math.cos(2 * t);
			data.push([r, i]);
		}
		this.renderCovertData([
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
		]);

		this.options = {
			title: {
				x: "left",
				top: "1",
				textStyle: {
					color: "#000",
					fontSize: 14
				}
			},
			tooltip: {
				show: true
				// formatter:(params)=>{
				//   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
				//   return data;
				// },
			},
			visualMap: [
				{
					type: "continuous",
					seriesIndex: 0,
					text: ["bar3D"],
					calculable: true,
					max: 300,
					inRange: {
						color: ["#bcddfb", "#37a2da"]
					}
				}
			],
			geo3D: {
				// left: "0%",
				// right: "0%",
				top: "top",
				// bottom: "0%"
				map: "china",
				roam: true,
				itemStyle: {
					color: "#bcddfb",
					opacity: 1,
					borderWidth: 0.4,
					borderColor: "#666"
				},
				label: {
					show: true,
					textStyle: {
						color: "#000", //地图初始化区域字体颜色
						fontSize: 8,
						opacity: 1,
						backgroundColor: "rgba(0,23,11,0)"
					}
				},
				emphasis: {
					//当鼠标放上去  地区区域是否显示名称
					label: {
						show: true,
						textStyle: {
							color: "#fff",
							fontSize: 3,
							backgroundColor: "rgba(0,23,11,0)"
						}
					}
				},
				//shading: 'lambert',
				light: {
					//光照阴影
					main: {
						color: "#fff", //光照颜色
						intensity: 1.2, //光照强度
						//shadowQuality: 'high', //阴影亮度
						shadow: false, //是否显示阴影
						alpha: 55,
						beta: 10
					},
					ambient: {
						intensity: 0.3
					}
				}
			},
			series: [
				{
					name: "bar3D",
					type: "bar3D",
					coordinateSystem: "geo3D",
					barSize: 1, //柱子粗细
					shading: "lambert",
					opacity: 1,
					bevelSize: 0.3,
					label: {
						show: false,
						formatter: "{b}"
					},
					data: this.covertedData
				}
			]
		};
	},
	methods: {
		...mapActions("mapdata", [
			//mapdata是指modules文件夹下的mapdata.js
			"renderCovertData" //mapdata.js文件中的actions里的方法
		])
	}
};
</script>
