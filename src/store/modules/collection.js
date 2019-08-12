const state = {
	collects: [], //初始化一个colects数组
	showFooter: true,
	changableNum: 0
};
//用法：1，先要引入，import {mapState,mapGetters,mapActions} from 'vuex';
/*     2. ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
											  isShow:state=>state.footerStatus.showFooter //注意这些与上面的区别就是state.footerStatus,
																																		//里面定义的showFooter是指footerStatus.js里state的showFooter
 })*/
//你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
/*...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
//第二个isShow是对应的footerStatus.js里的getters里的isShow
})*/
const getters = {
	renderCollects(state) {
		//承载变化的collects
		return state.collects;
	},
	isShow(state) {
		//承载变化的showFooter的值
		return state.showFooter;
	},
	getChangedNum() {
		//承载变化的changebleNum的值
		return state.changableNum;
	}
};
const mutations = {
	pushCollects(state, items) {
		//如何变化collects,插入items
		state.collects.push(items);
	},
	show(state) {
		//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
		state.showFooter = true;
	},
	hide(state) {
		//同上
		state.showFooter = false;
	},
	newNum(state, sum) {
		//同上，这里面的参数除了state之外还传了需要增加的值sum
		state.changableNum += sum;
	}
};
//用法：1，先要引入，import {mapState,mapGetters,mapActions} from 'vuex';
//     2-1. ...mapActions('collection',item) 其中‘collection’是指modules文件夹下的collection.js
//     2-2. this.$store.dispatch('footerStatus/showFooter') //意思是指footerStatus.js里actions里的showFooter方法

const actions = {
	invokePushItems(context, item) {
		//触发mutations里面的pushCollects ,传入数据形参item 对应到items
		context.commit("pushCollects", item);
	},
	hideFooter(context) {
		//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
		context.commit("hide");
	},
	showFooter(context) {
		//同上注释
		context.commit("show");
	},
	getNewNum(context, num) {
		//同上注释，num为要变化的形参
		context.commit("newNum", num);
	}
};
export default {
	namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
	state,
	getters,
	mutations,
	actions
};
