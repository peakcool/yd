<template>
	<div class="page has-navbar has-tabbar" v-nav="{title: '女装 · 分类',showBackButton: true}">
		<div class="page-content">
			<yd-catalog-card :catalog-list="getCatalogList"></yd-catalog-card>
		</div>
	</div>
</template>

<script>

	var http = require('../../utils/HettpHelper.js');
	var common = require('../../utils/Common.js');
	var catalogActions = require('../../vuex/catalog/actions.js');
	var catalogGetters = require('../../vuex/catalog/getters.js');
	module.exports = {
		vuex : {
			getters : {
				getCatalogList : catalogGetters.getCatalogList
			},
			actions : {
				setCatalogList : catalogActions.setCatalogList
			}
		},
		data : function() {
			return {
				catalog : [],
				queryCatalog : function (){
					var self = this;
					http.catalog.query({
						succ : function(rs) {
							self.setCatalogList(rs);
							self.catalog = rs;
						},
						err : function(msg) {
							common.tips(msg, 'error', 1500);
						}
					});
				}
			}
		},
		components : {
			'yd-catalog-card' : require('./Card.vue')
		},
		ready : function (){
			if (this.catalog.length < 1) {
				this.queryCatalog();
			} else {
				this.catalog = this.getCatalogList;
			}

			this.$watch("catalog" , function (v) {
               console.log("catalog.watch:%0",v);
            });
		}
	}
</script>