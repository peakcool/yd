<template>
<a class="list card" href="#!/article/{{ item.id }}">
	<div class="item item-avatar">
	    <h2>{{ item.title }}</h2>
	    <p>{{fromNow(item.releasetime)}}</p>
  	</div>
	<div class="item item-body">
		<img class="full-image" src="{{ item.cover }}">
		<p>
		  	<a href="javascript:void(0)" class="subdued"><i class="icon ion-heart"></i>&nbsp;{{ item.like }}</a>
		</p>
	</div>
</a>
</template>

<script>
    var common = require('../../utils/Common.js');
	module.exports = {
		props : {
			item : Object
		},
		methods : {
	        fromNow: function(date) {
	            if (date < 1000000000000) {
	                date *= 1000;
	            }
	            var now = new Date;
	            var now_d = now.getDate();
	            var t;
	            var diff = date > now ? date - now : now - date;
	            date = new Date(date);
	            var y = date.getFullYear(); //获取完整的年份(4位,1970-????)
	            var mon = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
	            var d = date.getDate(); //获取当前日(1-31)
	            var d_s = now_d - d;
	            if (d_s == 0) {
	                return "今天";
	            } else if (d_s == 1) {
	                return "昨天";
	            } else {
	                return mon + "月" + d + "日";
	            }
	            return y + "年" + mon + "月" + d + "日";
	        }
		}
	}
</script>