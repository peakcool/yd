<style>
    .classify-list{
        position: fixed;
        display: flex;
        top:2.25rem;
        left: 0;
        right: 0;
        bottom: 2rem;
        z-index: 7;
        background-color: #fff;
        flex-wrap:wrap;
        align-content: flex-start;
    }
    .classify-list .classify-item:nth-child(2n+1){
        border-right:1px solid #eee;
    }
</style>
<template>
<div class="classify-list">
    <yd-catalog-item v-for="el in catalogList" :catalog="el" @click="catalogChange(el.id)"></yd-catalog-item>
</div>
</template>

<script>
    module.exports = {
        props : ['catalogList'],
        components : {
            "yd-catalog-item" : require('./Item.vue')
        },
        methods : {
            catalogChange : function (id){
                this.$router.go('catalog/' + id);
            }
        }
    }
</script>
