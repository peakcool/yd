module.exports = {

	/* 设置商品详细数据 */
	setGoodsDetails : function (store, obj) {
		return store.dispatch('SET_GOODS_DETAILS', obj);
	}
}