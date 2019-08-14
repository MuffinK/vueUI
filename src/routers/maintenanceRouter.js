const IndexLayout = () =>
	import(
		/* webpackChunkName: "group-indexLayout" */ "../component/baseLayout/IndexLayout.vue"
	);

export default [
	{
		name: "maintenance",
		path: "/maintenance",
		component: IndexLayout
	}
];
