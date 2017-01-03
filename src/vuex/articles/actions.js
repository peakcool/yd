module.exports = {
	/* 设置文章数据 */
	setArticles : function (store, obj) {
		return store.dispatch('SET_ARTICLES', obj);
	}
}