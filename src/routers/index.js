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
const Detail = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/shop/Detail.vue"
	);
const Modify = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/shop/Modify.vue"
	);
const Cart = () =>
	import(/* webpackChunkName: "group-OperPage" */ "../component/shop/Cart.vue");
var routes = [];

routes = Array.prototype.concat.apply(routes, [
	{ name: "/LoginPage", path: "/LoginPage", component: LoginPage },
	{ name: "/", path: "/", component: HomePage },
	{ name: "/RegistPage", path: "/RegistPage", component: RegistPage },
	{ name: "/ItemPage", path: "/ItemPage", component: ItemPage },
	{ name: "/HomePage", path: "/HomePage", component: HomePage },
	{ name: "/Detail", path: "/Detail", component: Detail },
	{ name: "/Modify", path: "/Modify", component: Modify },
	{ name: "/Cart", path: "/Cart", component: Cart }
]);

export default routes;
