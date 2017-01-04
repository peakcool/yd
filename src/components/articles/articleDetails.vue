<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '搭配详情', showBackButton: true}">
    <div class="page-content padding-top">
      	<yd-goods-card  v-for="goods in article" :item="goods"></yd-goods-card> 
    </div>
  </div>
</template>

<script>
	var http = require('../../utils/HettpHelper.js');
    var common = require('../../utils/Common.js');
	var gloalStore = require('../../vuex/store.js');
	var articlesActions = require('../../vuex/articles/actions.js');
	var articlesGetters = require('../../vuex/articles/getters.js');

	module.exports = {
		store : gloalStore, //注入store
		vuex : {
			getters : {
				getArticleDetails : articlesGetters.getArticleDetails
			},
			actions : {
				setArticleDetails : articlesActions.setArticleDetails
			}
		},
		data : function() {
			return {
				article : [],
				queryArticle : function () {
					var self = this;
					http.article.query({
						succ : function(rs) {
							self.setArticleDetails(rs.list);
	                		self.article = rs.list;
		            	},
		          		err : function (msg) {
							common.tips(msg,'error',1500);
						}
					});
				}
			}
		},
		components : {
			'yd-goods-card' : require('../common/GoodsCard.vue')
		},
		ready : function (){
			if (this.article.length < 1) {
				this.queryArticle();
			} else {
				this.article = getArticleDetails;
			}
		}
	}
</script>
