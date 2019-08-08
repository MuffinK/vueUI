// const OperPage = () =>
// 	import(
// 		/* webpackChunkName: "group-OperPage" */ "../component/composedComponents/OperPage.vue"
// 	);
// const MentPage = () =>
// 	import(
// 		/* webpackChunkName: "group-OperPage" */ "../component/composedComponents/MentPage.vue"
// 	);
const IndexPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/pages/IndexPage.vue"
	);
const PosScence = () =>
	import(/* webpackChunkName: "group-OperPage" */ "../component/pages/Pos.vue");

var routes = [];

routes = Array.prototype.concat.apply(routes, [
	// { name: "/OperPage", path: "/OperPage", component: OperPage },
	// { name: "/MentPage", path: "/MentPage", component: MentPage },
	{ name: "/IndexPage", path: "/IndexPage", component: IndexPage },
	{ name: "/PosScence", path: "/PosScence", component: PosScence }
]);

export default routes;
