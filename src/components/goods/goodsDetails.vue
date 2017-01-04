<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '商品详情', showBackButton: true}">
    <div class="page-content padding-top">
      	<yd-goods-card  :item="goods"></yd-goods-card> 
    </div>
  </div>
</template>

<script>
	var http = require('../../utils/HettpHelper.js');
    var common = require('../../utils/Common.js');
	var gloalStore = require('../../vuex/store.js');
	var goodsActions = require('../../vuex/goods/actions.js');
	var goodsGetters = require('../../vuex/goods/getters.js');

	module.exports = {
		store : gloalStore, //注入store
		vuex : {
			getters : {
				getGoodsDetails : goodsGetters.getGoodsDetails
			},
			actions : {
				setGoodsDetails : goodsActions.setGoodsDetails
			}
		},
		data : function() {
			return {
				goods : [],
				queryGoods : function () {
					var self = this;
					http.goods.query({
						succ : function(rs) {
							self.setGoodsDetails(rs);
	                		self.goods = rs;
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
			if (this.goods.length < 1) {
				this.queryGoods();
			} else {
				this.goods = getGoodsDetails;
			}
		}
	}
</script>
