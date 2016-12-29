require('./static/css/common.css');
require('./static/css/ionic.css');

var Vue = require('vue');
var Vonic = require('vonic');
var App = require('./app.vue');

const routers = {
	'/' : {
		component : require('./app.vue'),
	},
	'/wearing' : {
		name : 'wearing',
		component : require('./components/wearing/Index.vue')
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


