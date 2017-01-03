<template>
    <div class="page has-navbar page-swiper" v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
        <yd-common :index="index"></yd-common>
    </div>
</template>
<script>
var gloalStore = require('./vuex/store.js');

var commonActions = require('./vuex/common/actions.js');
module.exports = {
    store : gloalStore, //注入store
    data: function() {
        return {
            menus: [
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
            index : 0,
        }
    },
    vuex : {
        actions : {
           setTplIndex : commonActions.setTplIndex
        }
    },
    components: {
        'yd-common' : require('./components/common/Common.vue')
    },
    methods: {
        menuClicked(menuIndex) {
            this.setTplIndex(menuIndex);
        }
    },
    beforeDestroy() {
        $tabbar.$emit('hideTabbar')
    }
}
</script>
