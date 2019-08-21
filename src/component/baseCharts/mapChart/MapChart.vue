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
	props: {
		mapdata: {
			type: Array,
			required: true
		}
	},
	computed: {
		...mapGetters("chartdata", {
			geoCoordMap: "renderGeoCoordMap"
		}),
		covertedData() {
			var res = [];
			for (var i = 0; i < this.mapdata.length; i++) {
				var geoCoord = this.geoCoordMap[this.mapdata[i].name];
				if (geoCoord) {
					res.push({
						name: this.mapdata[i].name,
						value: geoCoord.concat(this.mapdata[i].value)
					});
				}
			}
			return res;
		},
		options() {
			console.log("222");
			return {
				title: {
					x: "left",
					top: "10",
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
							color: ["#F2E30B", "#F3E585", "#F3E585"]
						}
					}
				],
				geo3D: {
					map: "china",
					roam: true,
					itemStyle: {
						// color: "#9FD587",
						opacity: 1,
						borderWidth: 0.4,
						borderColor: "#000"
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
			startTime: "2018-02-02",
			endTime: "2018-08-02",
			type: "1"
		});
	},
	methods: {
		...mapActions("chartdata", [
			//chartdata是指modules文件夹下的chartdata.js
			"insertParams"
		])
	}
};
</script>
