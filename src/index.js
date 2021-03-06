import Vue from "vue";
import VueRouter from "vue-router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import Viser from "viser-vue";

import routes from "./routers/index";
// import OperPage from "./component/composedComponents/OperPage.vue";

// import { Global } from "g2"; // 获取 Global 全局对象
// Global.setTheme("dark");

Vue.use(Antd);
Vue.use(Viser);
Vue.use(VueRouter);

process.env.NODE_ENV !== "production" && (localStorage["debug"] = "iot-*");

const router = new VueRouter({
	routes
});

new Vue({
	template: "<router-view />",
	router
}).$mount("#app");
