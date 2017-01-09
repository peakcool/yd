<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '商品详情', showBackButton: true}">
        <div class="page-content padding-top">
            <yd-goods-details-card :item="goods"></yd-goods-details-card>
        </div>
        <div class="tabs goods-bottom bar bar-footer bar-balanced">
            <a class="tab-item">
                <i class="ion-ios-heart-outline"></i>&nbsp;{{ goods.like }}
            </a>
            <a class="tab-item">
                <i class="ion-android-share-alt"></i>&nbsp;分享
            </a>
            <a class="tab-item go-buy">
	    	去淘宝购买
	 	</a>
        </div>
    </div>
</template>
<script>
var http = require('../../utils/HettpHelper.js');
var common = require('../../utils/Common.js');
var goodsActions = require('../../vuex/goods/actions.js');
var goodsGetters = require('../../vuex/goods/getters.js');

module.exports = {
    vuex: {
        getters: {
            getGoodsDetails: goodsGetters.getGoodsDetails
        },
        actions: {
            setGoodsDetails: goodsActions.setGoodsDetails
        }
    },
    data: function() {
        return {
            goods: [],
            queryGoods: function() {
                var self = this;
                http.goods.query({
                    succ: function(rs) {
                        self.setGoodsDetails(rs);
                        self.goods = rs;
                    },
                    err: function(msg) {
                        common.tips(msg, 'error', 1500);
                    }
                });
            }
        }
    },
    components: {
        'yd-goods-details-card': require('./GoodsDetailsCard.vue')
    },
    ready: function() {
        if (this.goods.length < 1) {
            this.queryGoods();
        } else {
            this.goods = getGoodsDetails;
        }
    }
}
</script>
