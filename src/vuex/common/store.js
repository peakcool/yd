//创建对象保存应用所需数据
var state = {
	tplIndex : "yd-0" //模版编号
};

var mutations = {
	/**
	 * 设置模版编号
	 * @Author   TangLiangcheng
	 * @DateTime 2017-01-03
	 * @param    {[int]}       index [编号]
	 */
	SET_TPL_INDEX : function (state, index) {
		state.tplIndex = 'yd-' + index;
	}
};

//整合初始状态和变更函数，得到所需store，链接到应用中
module.exports = {
	state : state,
	mutations : mutations
};