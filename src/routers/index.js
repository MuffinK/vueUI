const Hello = () =>
	import(/* webpackChunkName: "group-hello" */ "../component/Hello.vue");

const HelloChart = () =>
	import(
		/* webpackChunkName: "group-Chart" */ "../component/charts/HelloChart.vue"
	);

const DndTable = () =>
	import(
		/* webpackChunkName: "group-table" */ "../component/carTrace/ListCarTrace.vue"
	);

const Map = () =>
	import(/* webpackChunkName: "group-table" */ "../component/map/Map.vue");

const Exec = () =>
	import(/* webpackChunkName: "group-table" */ "../component/exec/Exec.vue");
const ListAllCarInfo = () =>
	import(
		"../component/carInfo/ListAllCarInfo.vue"
	);

var routes = [];

routes = Array.prototype.concat.apply(routes, [
	{ name: "/", path: "/", component: Hello },
	{ name: "/chart", path: "/chart", component: HelloChart },
	{ name: "/table", path: "/table", component: DndTable },
	{ name: "/map", path: "/map", component: Map },
	{ name: "/exec", path: "/exec", component: Exec },
		{ name: "carInfo", path: "/carInfo", component: ListAllCarInfo }

]);

export default routes;
