<template>
	<component :is="getTplIndex"></component>
</template>

<script>
	var commonGetters = require('../../vuex/common/getters.js');
	module.exports = {
		vuex : {
			getters : {
				getTplIndex : commonGetters.getTplIndex
			}
		},
		components : {
			'yd-0': require('../wearing/Index.vue'),
	        'yd-1': require('../women/Index.vue'),
	        'yd-2': require('../shoe/Index.vue'),
		}
	}
</script>