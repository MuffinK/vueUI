import Vue from "vue";
import VueRouter from "vue-router";

import Antd from "ant-design-vue";
import "antd-css";

import Viser from "viser-vue";

import routes from "./routers/index";

import VueECharts from "vue-echarts";
import "echarts";
import "echarts-gl";

Vue.component("e-chart", VueECharts);

// import { Global } from "g2"; // 获取 Global 全局对象
// Global.setTheme("dark");

Vue.use(Antd);
Vue.use(Viser);
Vue.use(VueRouter);

process.env.NODE_ENV !== "production" && (localStorage["debug"] = "iot-*");
import IotBackground from "./component/baseLayout/Background.vue";
const router = new VueRouter({
	routes
});
Vue.component("IotBackground", IotBackground);
new Vue({
	template: "<IotBackground />",
	router
}).$mount("#app");
