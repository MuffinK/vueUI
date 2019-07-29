import Vue from "vue";
import VueRouter from "vue-router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import Viser from "viser-vue";

import routes from "./routers/";

import MainLayout from "./component/layouts/MainLayout";
Vue.use(Antd);
Vue.use(Viser);
Vue.use(VueRouter);

process.env.NODE_ENV !== "production" && (localStorage["debug"] = "iot-*");

const router = new VueRouter({
	routes
});

new Vue({
	components: {
		MainLayout
	},
	template: "<MainLayout />",
	router
}).$mount("#app");
