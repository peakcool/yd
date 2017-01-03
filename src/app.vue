<template>
    <div class="page has-navbar page-swiper" v-nav="{title: '衣调 • 搭配', showBackButton: false}" v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
        <div class="page-content padding-top" v-show="show">
            <yd-card  v-for="article in article_recommend" :item="article"></yd-card> 
        </div>
    </div>
    <component v-show="!show" :is="component_No"></component>
    
</template>
<script>
var common = require('./utils/Common.js');
var http = require('./utils/HettpHelper.js');

module.exports = {
    data: function() {
        return {
            menus: [
            {
                iconOn: 'ion-ios-home',
                iconOff: 'ion-ios-home-outline',
                text: '首页',
            },
            {
                iconOn: 'ion-ios-paw',
                iconOff: 'ion-ios-paw-outline',
                text: '穿搭攻略',
            }, {
                iconOn: 'ion-tshirt',
                iconOff: 'ion-tshirt-outline',
                text: '女装尖货',
            }, {
                iconOn: 'ion-ios-box',
                iconOff: 'ion-ios-box-outline',
                text: '鞋包配饰',
            }],
            show: true,
            component_No : "",
            article_recommend : []
        }
    },
    components: {
        'yd-1': require('./components/wearing/Index.vue'),
        'yd-2': require('./components/women/Index.vue'),
        'yd-3': require('./components/shoe/Index.vue'),
        'yd-card': require('./components/common/Card.vue'),
    },
    methods: {
        menuClicked(menuIndex) {
            if (menuIndex == 0) {
                this.show = true;
                common.go('');
                return false;
            }
            this.component_No = "yd-" + menuIndex;
            this.show = false;
        }
    },
    ready : function(){
        var self = this;
        http.article_recommend.query({
            succ : function(rs) {
                self.article_recommend = rs;
            },
            err : function(msg) {
                console.log(msg);
            }
        });
    },
    beforeDestroy() {
        $tabbar.$emit('hideTabbar')
    }
}
</script>
