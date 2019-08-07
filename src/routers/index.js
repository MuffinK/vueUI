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

var routes = [];

routes = Array.prototype.concat.apply(routes, [
	{ name: "/OperPage", path: "/OperPage", component: OperPage },
	{ name: "/MentPage", path: "/MentPage", component: MentPage },
	{ name: "/IndexPage", path: "/IndexPage", component: IndexPage }
]);

export default routes;
