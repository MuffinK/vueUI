import R from "rambdax";
const getGeoCoordMap = proviceName => {
	const coordData = {
		西藏: [91.11, 29.97],
		上海: [121.48, 31.22],
		广东: [113.23, 23.16],
		山西: [112.53, 37.87],
		海南: [110.35, 20.02],
		辽宁: [123.38, 41.8],
		吉林: [125.35, 43.88],
		宁夏: [106.27, 38.47],
		江西: [115.89, 28.68],
		内蒙古: [111.65, 40.82],
		四川: [104.06, 30.67],
		陕西: [108.95, 34.27],
		重庆: [106.54, 29.59],
		江苏: [118.78, 32.04],
		贵州: [106.71, 26.57],
		北京: [116.46, 39.92],
		浙江: [120.19, 30.26],
		山东: [117, 36.65],
		天津: [117.2, 39.13],
		河南: [113.65, 34.76],
		甘肃: [103.73, 36.03],
		新疆: [87.68, 43.77],
		福建: [119.3, 26.08],
		黑龙江: [126.63, 45.75],
		青海: [101.74, 36.56],
		河北: [114.48, 38.03],
		湖南: [113, 28.21],
		云南: [102.73, 25.04],
		广西: [108.33, 22.84],
		安徽: [117.27, 31.86],
		澳门: [113.33, 22.13],
		香港: [114.1, 22.2],
		台湾: [121.5, 25.05],
		湖北: [114.31, 30.52]
	};
	return R.path([proviceName])(coordData) || [0, 0];
};
export { getGeoCoordMap };