<template>
    <div v-nav="{'title' : '首页'}" v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
        <router-view></router-view>
    </div>
</template>
<script>
import {List, Item} from 'vonic'
module.exports = {
    data: function() {
        return {
            menus: [
            {
                iconOn: 'ion-ios-paw',
                iconOff: 'ion-ios-paw-outline',
                text: '穿搭攻略',
                path: '/wearing'
            }, {
                iconOn: 'ion-tshirt',
                iconOff: 'ion-tshirt-outline',
                text: '女装尖货',
                path: '/women'
            }, {
                iconOn: 'ion-ios-box',
                iconOff: 'ion-ios-box-outline',
                text: '鞋包配饰',
                path: '/shoe'
            }],
        }
    },
    components: {
      List, Item, 
    },
    beforeDestroy() {
        $tabbar.$emit('hideTabbar')
    }
}
</script>
