//创建对象保存应用所需数据
var state = {
	articles : [] //文章数据
};

var mutations = {
	/**
	 * 设置文章数据
	 */
	SET_ARTICLES : function (state, obj) {
		state.articles = obj;
	}
};

//整合初始状态和变更函数，得到所需store，链接到应用中
module.exports = {
	state : state,
	mutations : mutations
};