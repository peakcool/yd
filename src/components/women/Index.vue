<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '女装尖货', showMenuButton: true, menuButtonText : menuButton, onMenuButtonClick: toggleSidebar}">
        <div class="page-content padding-top">
            <yd-goods-card v-for="goods in goodsList" :item="goods"></yd-goods-card>
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
            getGoodsList: goodsGetters.getGoodsList
        },
        actions: {
            setGoodsList: goodsActions.setGoodsList
        }
    },
    data: function() {
        return {
            menuButton: '<a class="button button-icon icon ion-navicon menu-catalog"></a>',
            sidebar: undefined,
            goodsList: [],
            queryGoods: function() {
                var self = this;
                http.goods_list.query({
                    succ: function(rs) {
                        self.setGoodsList(rs.list);
                        self.goodsList = rs.list;
                    },
                    err: function(msg) {
                        common.tips(msg, 'error', 1500);
                    }
                });
            }
        }
    },
    components: {
        'yd-goods-card': require('../goods/GoodsCard.vue'),
    },
    methods: {
        toggleSidebar : function () {
        	this.$router.go('/catalog');
        },
    },
    ready: function() {
        this.queryGoods();
    }
}
</script>
