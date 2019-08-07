/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.png" {
	const value: any;
	export default value;
}
declare module "*.jpg";
declare module "*.vue" {
	import Vue from "vue";
	export default Vue;
}
