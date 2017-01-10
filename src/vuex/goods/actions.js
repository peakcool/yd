module.exports = {

	/* 设置商品详细数据 */
	setGoodsDetails : function (store, obj) {
		return store.dispatch('SET_GOODS_DETAILS', obj);
	},

	/* 设置商品列表 */
	setGoodsList : function (store, obj) {
		return store.dispatch('SET_GOODS_LIST', obj);
	},

	/* 设置分类商品列表 */
	setCatalogGoodsList : function (store, obj) {
		return store.dispatch('SET_CATALOG_GOODS_LIST', obj);
	}
}