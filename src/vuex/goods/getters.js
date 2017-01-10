module.exports = {

	getGoodsDetails : function (state) {
		return state.goods.goodsDetails;
	},

	getGoodsList : function (state) {
		return state.goods.goodsList;
	},

	getCatalogGoodsList : function (state) {
		return state.goods.catalogGoodsList;
	}
}