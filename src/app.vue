<template>
    <yd-common></yd-common>
</template>
<script>
var gloalStore = require('./vuex/store.js');
module.exports = {
    store : gloalStore, //注入store
    components: {
        'yd-common' : require('./components/common/Common.vue')
    },
}
</script>