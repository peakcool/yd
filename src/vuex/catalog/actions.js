module.exports = {

	/* 设置分类列表 */
	setCatalogList : function (store, obj) {
		return store.dispatch('SET_CATALOG_LIST', obj);
	}
}