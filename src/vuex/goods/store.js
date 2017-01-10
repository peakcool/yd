//创建对象保存应用所需数据
var state = {
	goodsDetails : [], //商品详细信息
	goodsList : [], //商品列表
	catalogGoodsList : [],
};

var mutations = {

	/**
	 * 设置商品详细信息
	 */
	SET_GOODS_DETAILS : function (state, obj) {
		state.goodsDetails = obj;
	},

	/**
	 * 设置商品列表
	 */
	SET_GOODS_LIST : function (state, obj) {
		state.goodsList = obj;
	},

	/**
	 * 设置分类商品列表
	 */
	SET_CATALOG_GOODS_LIST : function (state, obj) {
		state.catalogGoodsList = obj;
	}
};

//整合初始状态和变更函数，得到所需store，链接到应用中
module.exports = {
	state : state,
	mutations : mutations
};