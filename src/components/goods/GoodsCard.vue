<template>
    <div class="list card">
        <a href="#!/goods/{{ item.id }}">
            <div class="item item-avatar">
                <h2>{{ item.title }}</h2>
            </div>
            <div class="item item-body">
                <img class="full-image" src="{{ item.cover }}">
                <p class="item-about">{{ item.about }}</p>
                <p>
                    <!-- <a href="javascript:void(0)" class="subdued"><i class="icon ion-heart"></i>&nbsp;{{ item.like }}</a> -->
                    <a href="javascript:void(0)" class="subdued"><i class="icon ion-social-yen"></i>&nbsp;{{ item.price }}</a>
                    <md-button class="button button-calm button-outline" @click="clicked()">
					    立即购买
					</md-button>
                </p>
            </div>
        </a>
    </div>
</template>
<script>
var common = require('../../utils/Common.js');
module.exports = {
    props: {
        item: Object
    }
}
</script>
