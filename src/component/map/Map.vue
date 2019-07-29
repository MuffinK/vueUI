<template>
	<div id="template">
		<div id="XSDFXPage" class="XSDFXPage" />
		<a-button
			style="width: 280px"
			type="primary"
			html-type="submit"
			icon="check-circle"
			@click="showhistoryline"
			>测试
		</a-button>
	</div>
</template>
<script>
import myIconPng from "./icon_carMonitor_car.png";
import axios from "axios";
import { setInterval } from "timers";
import debug from "debug";
import { TimelineLite, TweenLite } from "gsap";
const log = debug("iot-map:log");

export default {
	name: "",
	data() {
		return {
			site: [],
			waypoints: [],
			bmap: {},
			routeNo: "",
			routeExecDate: "",
			devId: "",
			startLat: "",
			startLng: "",
			endLat: "",
			endLng: "",
			carMk: null,
			myIcon: {},
			myIcon1: null,
			driving: null
		};
	},
	mounted: function() {
		this.setmap();
	},
	methods: {
		//初始化
		setmap: function() {
			this.bmap = new BMap.Map("XSDFXPage", { enableMapClick: true });
			this.myIcon = new BMap.Icon(myIconPng, new BMap.Size(37, 25), {
				imageOffset: new BMap.Size(0, 0)
			});
			var point = new BMap.Point(116.404, 39.915);
			var marker = new BMap.Marker(point);
			this.bmap.addOverlay(marker);
			this.bmap.centerAndZoom(point, 11);
			this.bmap.enableScrollWheelZoom(true);
			this.bmap.enableContinuousZoom();
		},
		//规划路线
		showplanline: function() {
			this.bmap.clearOverlays();
			axios
				.get(
					// "http://122.21.141.173:9081/icbc/iot/executeRoute/details?routeNo=22019060317275346017&routeExecDate=2019-06-04"
					"http://122.21.141.173:9081/icbc/iot/executeRoute/details?routeNo=" +
						this.routeNo +
						"&routeExecDate=" +
						this.routeExecDate
				)
				.then(response => {
					var arr = response.data.data.routeSites;
					log(response);
					if (response.data.data.routePeople.length != 0) {
						for (var i = 0; i < arr.length; i++) {
							this.site[i] = new BMap.Point(arr[i].siteLngt, arr[i].siteLatt);
						}
						if (arr.length >= 3) {
							for (var t = 1; t < arr.length - 1; t++) {
								this.waypoints.push(this.site[t]);
							}
							this.driving = new BMap.DrivingRoute(this.bmap, {
								renderOptions: { map: this.bmap, autoViewport: true }
							});
							this.driving.search(this.site[0], this.site[arr.length - 1], {
								waypoints: this.waypoints
							});
						} else if (arr.length == 2) {
							this.driving = new BMap.DrivingRoute(this.bmap, {
								renderOptions: { map: this.bmap, autoViewport: true }
							});
							this.driving.search(this.site[0], this.site[arr.length - 1]);
						}
					}
				})
				.catch(error => {
					log(error);
				});
		},
		//实时轨迹
		async showgpsline() {
			var timename = setInterval(() => {
				axios
					.get("http://122.21.141.229:9081/icbc/iot/route/detail", {
						params: {
							devId: 22019050510393446347,
							qryType: 1
						}
					})
					.then(response => {
						log(response);
						this.endLng = response.data.dbLon;
						this.endLat = response.data.dbLat;
						this.goway();
					});
			}, 3000);
		},
		goway: function() {
			if (this.startLng.length != 0) {
				this.drawIcon(this.startLng, this.startLat, this.endLng, this.endLat);
			}
			this.startLng = this.endLng;
			this.startLat = this.endLat;
		},
		drawIcon: function(startLng, startLat, endLng, endLat) {
			if (this.carMk != null) {
				this.bmap.removeOverlay(this.carMk);
			}
			this.carMk = new BMap.Marker(new BMap.Point(endLng, endLat), {
				icon: this.myIcon
			});
			this.bmap.addOverlay(this.carMk);
			this.drawGreenLine(startLng, startLat, endLng, endLat);
		},
		drawGreenLine: function(startLng, startLat, endLng, endLat) {
			var polyline = new BMap.polyline(
				[new BMap.Point(startLng, startLat), new BMap.Point(endLng, endLat)],
				{ strokeColor: "green", strokeWeight: 3, strokeOpacity: 0.5 }
			);
			this.bmap.addOverlay(polyline);
			log("car:" + startLng);
			log("car:" + startLat);
		},
		//显示历史线路
		showhistoryline: function() {
			var tl = new TimelineLite();
			var PointArr = [];
			var point0 = new BMap.Point(116.404, 39.915);
			var point1 = new BMap.Point(116.41, 39.92);
			var obj = { lng: 116.404, lat: 39.915 };
			PointArr.push(point0);
			PointArr.push(point1);
			this.carMk = new BMap.Marker(point0, {
				icon: this.myIcon
			});
			for (var i = 0; i < PointArr.length; i++) {
				// let point = PointArr[i].split(",");
				tl.add(
					TweenLite.to(obj, 0.05, {
						lng: 116.41,
						lat: 39.92,
						onUpdate: () => {
							if (this.bmap != undefined && this.carMk != undefined) {
								this.carMk.setPosition(new BMap.Point(obj.lng, obj.lat));
							}
						}
					})
				);
			}
			this.bmap.centerAndZoom(PointArr[0], 19);
			// this.myIcon1 = new BMap.Icon("./posblue32.png", new BMap.Size(16, 16));
			var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
				scale: 0.5,
				strokeColor: "#fff",
				strokeWeight: "2"
			});
			var icons = new BMap.IconSequence(sy, "10", "30");
			// for (var index in PointArr) {
			// 	var marker2 = new BMap.Marker(PointArr[index], { icon: this.myIcon1 });
			// 	this.bmap.addOverlay(marker2);
			// }
			var polyline = new BMap.Polyline(PointArr, {
				enableEditing: false,
				enableClicking: true,
				strokeWeight: "3",
				strokeOpacity: 0.7,
				strokeColor: "#1296db",
				icons: [icons]
			});
			this.bmap.addOverlay(polyline);
		}
	}
};
</script>
<style scoped>
.XSDFXPage {
	width: 1000px;
	height: 600px;
}
</style>
