<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '穿搭攻略'}">
    <div class="page-content padding-top">
      	<yd-card  v-for="article in articles" :item="article"></yd-card> 
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
			'yd-card' : require('../common/Card.vue')
		},
		ready : function (){
			if (this.articles.length < 1) {
				this.queryArticles();
			} else {
				this.articles = getArticles;
			}
		}
	}
</script>
