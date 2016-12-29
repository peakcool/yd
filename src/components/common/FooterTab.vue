<template>
	<a class="tab-item" v-for="($index, menu) in menus">
        <i class="icon {{menu.icon}}"></i> {{menu.text}}
    </a>
</template>

<script>
	module.exports = {
		props : {
			menus : []
		}
	}
</script>