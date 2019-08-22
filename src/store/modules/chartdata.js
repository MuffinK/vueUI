import axios from "axios";

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
	getChartData(state) {
		for (const item of state.params) {
			var url = `/iot/last?scene=${item.type}&time=${item.startTime}--${item.endTime}`;
			axios
				.get(url)
				.then(response => {
					var obj = {};
					state.allData[item.type] = response;
					Object.assign(obj, state.allData);
					state.allData = obj;
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	insertAllData(state, data) {
		var obj = {};
		for (var key in data) {
			state.allData[key] = data[key];
		}
		Object.assign(obj, state.allData);
		state.allData = obj;
	}
};

const actions = {
	resetParams(context) {
		context.commit("resetParams");
	},
	insertParams(context, data) {
		context.commit("insertParams", data);
	},
	insertAllData(context, data) {
		context.commit("insertAllData", data);
	},
	initChartData(context, data) {
		context.commit("getChartData", data);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
