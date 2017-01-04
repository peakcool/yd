module.exports = {
	/* 设置文章数据 */
	setArticles : function (store, obj) {
		return store.dispatch('SET_ARTICLES', obj);
	},

	/* 设置文章详细数据 */
	setArticleDetails : function (store, obj) {
		return store.dispatch('SET_ARTICLE_DETAILS', obj);
	}
}