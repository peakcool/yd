<style>
	.classify-item{
		display: flex;
		width: 50%;
		color:#999;
		align-items: center;
		height: 4rem;
		box-sizing: border-box;
		border-bottom:1px solid #eee;
	}
	.classify-item:active{
		background-color: rgba(0,0,0,.05);
	}
	.classify-item span{
		font-size: .7rem;
	}
	.classify-item img {
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 .5rem 0 .8rem;
	}
</style>
<template>
	<div class="classify-item">
		<img :src="catalog.icon" alt="{{catalog.name}}"> 
		<span>{{catalog.name}}</span>
	</div>	
</template>
<script>
	export default {
		props : {
			catalog : Object
		}
	}
</script>