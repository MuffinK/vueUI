const OperPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/composedComponents/OperPage.vue"
	);
const MentPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/composedComponents/MentPage.vue"
	);
const IndexPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/index/IndexPage.vue"
	);
const HomePage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/shop/HomePage.vue"
	);
const LoginPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/shop/LoginPage.vue"
	);
const RegistPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/shop/RegistPage.vue"
	);
const ItemPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/shop/ItemPage.vue"
	);
var routes = [];

routes = Array.prototype.concat.apply(routes, [
	{ name: "/OperPage", path: "/OperPage", component: OperPage },
	{ name: "/MentPage", path: "/MentPage", component: MentPage },
	{ name: "/IndexPage", path: "/IndexPage", component: IndexPage },
	{ name: "/LoginPage", path: "/LoginPage", component: LoginPage },
	{ name: "/RegistPage", path: "/RegistPage", component: RegistPage },
	{ name: "/ItemPage", path: "/ItemPage", component: ItemPage },
	{ name: "/HomePage", path: "/HomePage", component: HomePage }
]);

export default routes;
