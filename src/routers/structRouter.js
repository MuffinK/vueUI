const IndexLayout = () =>
	import(
		/* webpackChunkName: "group-indexLayout" */ "../component/baseLayout/IndexLayout.vue"
	);

export default [
	{
		name: "struct",
		path: "/struct",
		component: IndexLayout
	}
];
