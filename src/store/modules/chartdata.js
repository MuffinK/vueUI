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
	// getChartData(state) {

	// },
	insertAllData(state, { type, data }) {
		state.allData = Object.assign({}, state.allData, { [type]: data });
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
	initChartData(context, data) {
		for (let item of state.params) {
			var url = `/iot/last?scene=${item.type}&time=${item.startTime}--${item.endTime}`;
			axios
				.get(url)
				.then(response => {
					context.commit("insertAllData", {
						type: item.type,
						data: response.data
					});
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
