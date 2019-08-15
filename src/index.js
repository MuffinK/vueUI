import Vue from "vue";
import VueRouter from "vue-router";

import Antd from "ant-design-vue";
import "antd-css";

import routes from "./routers/index";
import store from "./store/index"; //引入store

import VueECharts from "vue-echarts";
import "echarts";
import "echarts-gl";

import VueLogger from "vuejs-logger";

const isProduction = process.env.NODE_ENV === "production";

const options = {
	isEnabled: true,
	logLevel: isProduction ? "error" : "debug",
	stringifyArguments: false,
	showLogLevel: true,
	showMethodName: true,
	separator: "|",
	showConsoleColors: true
};

Vue.use(VueLogger, options);
Vue.component("e-chart", VueECharts);

Vue.use(Antd);
Vue.use(VueRouter);

import IotBackground from "./component/baseLayout/Background.vue";
const router = new VueRouter({
	routes
});
Vue.component("IotBackground", IotBackground);
new Vue({
	template: "<IotBackground />",
	router,
	store
}).$mount("#app");
