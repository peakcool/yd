require('./static/css/common.css');
require('./static/css/ionic.css');

var Vue = require('vue');
var Vonic = require('vonic');
var App = require('./app.vue');

const routers = {
	'/' : {
		component : require('./app.vue'),
	},
	'article/:id' : {
		name : 'article',
		component : require('./components/articles/ArticleDetails.vue')
	},
	'goods/:id' : {
		name : 'goods',
		component : require('./components/goods/GoodsDetails.vue')
	},
	'/women' : {
		name : 'women',
		component : require('./components/women/Index.vue')
	},
	'/shoe' : {
		name : 'shoe',
		component : require('./components/shoe/Index.vue')
	}
};

Vue.use(Vonic.app, {routers: routers, defaultRouterUrl: '/'})


