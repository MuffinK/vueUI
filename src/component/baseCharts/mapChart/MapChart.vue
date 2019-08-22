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
import { spawn, Thread, Worker } from "threads";
export default {
	mixins: [BaseEchart],
	asyncComputed: {
		async covertedData() {
			var data = R.path(["data"])(this.allData[this.key]) || [];
			const getMapData = await spawn(new Worker("./dataUtil"));
			return getMapData(data);
			// const result = await ;
			// await Thread.terminate(getMapData);
			// return result;
		}
	},
	computed: {
		...mapGetters("chartdata", {
			allData: "getAllData"
		}),
		key() {
			return "pos09";
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
