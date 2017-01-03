module.exports = {
	/* 设置模版编号 */
	setTplIndex : function (store, index) {
		return store.dispatch('SET_TPL_INDEX', index);
	}
}