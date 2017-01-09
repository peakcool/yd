<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '穿搭攻略'}" v-tabbar-menu-index="0">
    <div class="page-content padding-top">
      	<yd-article-card  v-for="article in articles" :item="article"></yd-article-card> 
    </div>
  </div>
</template>

<script>
	var http = require('../../utils/HettpHelper.js');
    var common = require('../../utils/Common.js');
	var articlesActions = require('../../vuex/articles/actions.js');
	var articlesGetters = require('../../vuex/articles/getters.js');

	module.exports = {
		vuex : {
			getters : {
				getArticles : articlesGetters.getArticles
			},
			actions : {
				setArticles : articlesActions.setArticles
			}
		},
		data : function() {
			return {
				articles : [],
				queryArticles : function () {
					var self = this;
					http.strategy.query({
						succ : function(rs) {
							self.setArticles(rs.list);
	                		self.articles = rs.list;
		            	},
		          		err : function (msg) {
							common.tips(msg,'error',1500);
						}
					});
				}
			}
		},
		components : {
			'yd-article-card' : require('../articles/ArticleCard.vue')
		},
		ready : function (){
			if (this.getArticles.length < 1) {
				this.queryArticles();
			} else {
				this.articles = this.getArticles;
			}
		}
	}
</script>
