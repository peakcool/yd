//创建对象保存应用所需数据
var state = {
	catalogList : [] //分类列表
};

var mutations = {

	/**
	 * 设置分类列表
	 */
	SET_CATALOG_LIST : function (state, obj) {
		state.catalogList = obj;
	}
};

//整合初始状态和变更函数，得到所需store，链接到应用中
module.exports = {
	state : state,
	mutations : mutations
};