<template>
    <div class="page has-navbar page-swiper" v-nav="{title: '衣调 • 搭配', showBackButton: false}" v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
    </div>
    <div class="page-content padding-top">
        <component :is="show"></component>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            menus: [{
                iconOn: 'ion-ios-home',
                iconOff: 'ion-ios-home-outline',
                text: '穿搭攻略',
            }, {
                iconOn: 'ion-ios-pricetags',
                iconOff: 'ion-ios-pricetags-outline',
                text: '女装尖货',
            }, {
                iconOn: 'ion-ios-person',
                iconOff: 'ion-ios-person-outline',
                text: '鞋包配置',
            }],
            show: "",
        }
    },
    components: {
        'yd-0': require('./components/wearing/Index.vue'),
        'yd-1': require('./components/women/Index.vue'),
        'yd-2': require('./components/shoe/Index.vue'),
    },
    methods: {
        menuClicked(menuIndex) {
            this.show = "yd-" + menuIndex;
        }
    },

    beforeDestroy() {
        $tabbar.$emit('hideTabbar')
    }
}
</script>
