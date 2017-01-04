var Vue = require('vue');
var Vuex = require('vuex');

//添加vuex插件
Vue.use(Vuex);

var common = require('./common/store.js');
var articles = require('./articles/store.js');
var goods = require('./goods/store.js');

module.exports = new Vuex.Store({
	//组合模块
	modules : {
		common : common,
		articles : articles,
		goods : goods
	}
});