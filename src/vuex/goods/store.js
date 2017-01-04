//创建对象保存应用所需数据
var state = {
	goodsDetails : [] //文章详细信息
};

var mutations = {

	/**
	 * 设置商品详细信息
	 */
	SET_GOODS_DETAILS : function (state, obj) {
		state.goodsDetails = obj;
	}
};

//整合初始状态和变更函数，得到所需store，链接到应用中
module.exports = {
	state : state,
	mutations : mutations
};