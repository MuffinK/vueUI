import Vue from "vue";
import VueRouter from "vue-router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// import Viser from "viser-vue";

import routes from "./routers/index";
// import OperPage from "./component/composedComponents/OperPage.vue";

// import { Global } from "g2"; // 获取 Global 全局对象
// Global.setTheme("dark");

Vue.use(Antd);
// Vue.use(Viser);
Vue.use(VueRouter);

process.env.NODE_ENV !== "production" && (localStorage["debug"] = "iot-*");

const router = new VueRouter({
	routes
});
import bg_BG from "ant-design-vue/lib/locale-provider/bg_BG.js";
new Vue({
	data() {
		return {
			bg_BG
		};
	},
	template: `
  <a-locale-provider :locale="bg_BG">
		<router-view />
	</a-locale-provider>`,
	router
}).$mount("#app");
