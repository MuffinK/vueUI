const IndexLayout = () =>
	import(
		/* webpackChunkName: "group-indexLayout" */ "../component/baseLayout/IndexLayout.vue"
	);
const IndexPage = () =>
	import(
		/* webpackChunkName: "group-OperPage" */ "../component/pages/IndexPage.vue"
	);
const PosScence = () =>
	import(/* webpackChunkName: "group-OperPage" */ "../component/pages/Pos.vue");

const IndexChildrenRouters = [
	{
		name: "PosScence",
		path: "PosScence",
		component: PosScence
	},
	{
		name: "IndexPage",
		path: "*",
		component: IndexPage
	}
];

export default [
	{
		name: "Operating",
		path: "/Operating",
		component: IndexLayout,
		children: IndexChildrenRouters
	},
	{
		name: "index",
		path: "*",
		component: IndexLayout
	}
];
