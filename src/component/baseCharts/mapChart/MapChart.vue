<style scoped>
.echarts {
	width: 100%;
	height: 500px;
}
</style>

<script>
import * as R from "rambdax";
import BaseEchart from "../../baseLayout/BaseEchart.vue";
import "./china.js";
import { mapGetters, mapActions } from "vuex";
const getGeoCoordMap = proviceName => {
	const coordData = {
		西藏: [91.11, 29.97],
		上海: [121.48, 31.22],
		广东: [113.23, 23.16],
		山西: [112.53, 37.87],
		海南: [110.35, 20.02],
		辽宁: [123.38, 41.8],
		吉林: [125.35, 43.88],
		宁夏: [106.27, 38.47],
		江西: [115.89, 28.68],
		内蒙古: [111.65, 40.82],
		四川: [104.06, 30.67],
		陕西: [108.95, 34.27],
		重庆: [106.54, 29.59],
		江苏: [118.78, 32.04],
		贵州: [106.71, 26.57],
		北京: [116.46, 39.92],
		浙江: [120.19, 30.26],
		山东: [117, 36.65],
		天津: [117.2, 39.13],
		河南: [113.65, 34.76],
		甘肃: [103.73, 36.03],
		新疆: [87.68, 43.77],
		福建: [119.3, 26.08],
		黑龙江: [126.63, 45.75],
		青海: [101.74, 36.56],
		河北: [114.48, 38.03],
		湖南: [113, 28.21],
		云南: [102.73, 25.04],
		广西: [108.33, 22.84],
		安徽: [117.27, 31.86],
		澳门: [113.33, 22.13],
		香港: [114.1, 22.2],
		台湾: [121.5, 25.05],
		湖北: [114.31, 30.52]
	};
	return R.path([proviceName])(coordData) || [0, 0];
};
export default {
	mixins: [BaseEchart],
	computed: {
		...mapGetters("chartdata", {
			allData: "getAllData"
		}),
		key() {
			return "pos09";
		},
		covertedData() {
			var data = R.path(["data"])(this.allData[this.key]) || [];
			return R.map(value => {
				const proviceName = R.path(["other_param"])(value);
				return {
					name: proviceName,
					value: R.concat(getGeoCoordMap(proviceName))([
						R.path(["scene_value"])(value)
					])
				};
			})(data);
		},
		options() {
			console.log("222");
			return {
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
						inRange: { color: ["#bcddfb", "#37a2da"] }
					}
				],
				geo3D: {
					map: "china",
					roam: true,
					top: "top",
					itemStyle: {
						color: "#bcddfb",
						opacity: 1,
						borderWidth: 0.2,
						borderColor: "#f5f4f7ee"
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
		}
	},
	created() {
		this.insertParams({
			startTime: "2019-08-02 16:00:00",
			endTime: "2019-08-02 16:30:00",
			type: this.key
		});
	},
	methods: {
		...mapActions("chartdata", ["insertParams"])
	}
};
</script>
