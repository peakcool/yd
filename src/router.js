module.exports = function(router){
	router.map({
		'/' : {
			component : require('./app.vue')
		},
		'/about' : {
			name : 'about',
			component : require('./components/About.vue')
		},
		'/test' : {
			name : 'test',
			component : require('./components/Test.vue')
		}
	});
}