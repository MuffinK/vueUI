import axios from "axios";
import * as R from "rambdax";
import { merge } from "rxjs";
const state = {
	allData: {},
	params: []
};

const getters = {
	getParams(state) {
		return state.params;
	},
	getAllData(state) {
		return state.allData;
	}
};

const mutations = {
	resetParams(state) {
		state.params = [];
	},
	insertParams(state, item) {
		state.params.push(item);
	},
	insertAllData(state, payload) {
		state.allData = R.mergeAll(payload);
	}
};

const actions = {
	resetParams(context) {
		context.commit("resetParams");
	},
	insertParams(context, data) {
		context.commit("insertParams", data);
	},
	// insertAllData(context, data) {
	// 	context.commit("insertAllData", data);
	// },
	async initChartData(context) {
		const queryParmas = context.state.params;
		const mergedParams = R.groupBy(R.path(["type"]))(queryParmas);

		const mergedTimes = R.map(
			R.reduce(
				({ latest, timeIntervals }, val) => ({
					latest: latest || val.time == "latest",
					timeIntervals: val.startTime
						? timeIntervals.concat({
								startTime: val.startTime,
								endTime: val.endTime
						  })
						: timeIntervals
				}),
				{ latest: false, timeIntervals: [] }
			)
		)(R.values(mergedParams));

		const allData = await Promise.all(
			R.map(item => {
				const getTimePeriodUrl = `/iot/last?scene=${item.type}&time=${item.startTime}--${item.endTime}`;
				const getLatestUrl = `/iot/last?scene=${item.type}&time=${item.startTime}--${item.endTime}`;

				return axios.get(
					item.time === "latest" ? getLatestUrl : getTimePeriodUrl
				);
			})(queryParmas)
		);
		const mergedArray = R.map(i => ({
			[queryParmas[i].type]: allData[i].data
		}))(Array.from({ length: allData.length }).map((_, i) => i));

		context.commit("insertAllData", mergedArray);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
