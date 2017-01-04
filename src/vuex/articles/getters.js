module.exports = {
	getArticles : function (state){
		return state.articles.articles;
	},

	getArticleDetails : function (state) {
		return state.articles.articleDetails;
	}
}