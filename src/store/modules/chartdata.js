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
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
