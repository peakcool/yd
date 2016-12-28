<template>
    <div 
        class="page has-navbar page-swiper" 
        v-nav="{title: '衣调 • 搭配', showBackButton: false}"
        v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}"
    >
        <div class="page-content padding-top">
            <component :is="show"></component>
        </div>
    </div>
</template>
<script>
module.exports = {
    data : function (){
        return {
            menus: [{
                iconOn: 'ion-ios-home',
                iconOff: 'ion-ios-home-outline',
                text: '穿搭攻略',
            }, {
                iconOn: 'ion-tshirt',
                iconOff: 'ion-tshirt',
                text: '女装尖货',
            }, {
                iconOn: 'ion-bag',
                iconOff: 'ion-bag',
                text: '鞋包配置',
            }],
            show : ""
        }
    },
    components : {
        'nb-wearing' : require('./components/wearing/Index.vue'),
        'nb-women' : require('./components/women/Index.vue'),
        'nb-shoe' : require('./components/shoe/Index.vue'),
    },
    methods: {
        menuClicked(menuIndex) {
            switch(menuIndex) {
                case 0 :
                    this.show = "nb-wearing";
                    break;
                case 1 :
                    this.show = "nb-women";
                    break;
                case 2 :
                    this.show = "nb-shoe";
                    break;
            }
        }
    },

    beforeDestroy() {
        $tabbar.$emit('hideTabbar')
    }
}
</script>
