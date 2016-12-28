module.exports = {
    go : function(rou){
        window.location.href = '#!/' + rou;
    },
    /**
     * 价格／浮点数验证
     */
    isFloat: function(str) {
        str += '';
        var reg = /^[0-9]+(\.[0-9]{1,2})?$/;
        var result = str.match(reg);
        if(result == null){return false;}
        return true;
    },
    /**
     * 标题的验证
     */
    isTitle: function(str) {
        str += '';
        if(str.length >= 6 && str.length <= 50){
            return true;
        }else{
            return false;
        }
    },
    /**
    * 商品简介得验证
    */
    isProductAbout : function(str){
        str += '';
        if(str.length >= 10 && str.length <= 300){
            return true;
        }else{
            return false;
        }
    },
    /**
    * URL的验证
    * 匹配 xx.xxx.com 这种 劳资这里只需要  验证是不是淘宝客链接
    */
    isUrl : function(str_url) {// 验证url
        // var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
        // + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
        // + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
        // + "|" // 允许IP和DOMAIN（域名）
        // + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
        // + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
        // + "[a-z]{2,6})" // first level domain- .com or .museum
        // + "(:[0-9]{1,4})?" // 端口- :80
        // + "((/?)|" // a slash isn't required if there is no file name
        // + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        // var re = new RegExp(strRegex);
        // return re.test(str_url);
        //https://s.click.taobao.com/t?e=m%3D2%26s%3DJPPSTcgRrAkcQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67k3e7xeRmrU2%2Fl0%2B1yuzCtJfS6%2FG00A%2FBejQismMdyNfCAi3cmQWO3N1pIAM3AQGeyY7uza6ZUoUlrfKbc84rlfznoGtjK%2F39AcrkN2veRaNxiXvDf8DaRs%3D&pvid=10_171.221.151.95_613_1479979374382
        if(str_url.indexOf('taobao.com') > 0 && str_url.indexOf('pvid') > 0){
            return true;
        }else{
            return false;
        }
    }, 
    /**
    * 判断各个组件，是否验证通过
    * @param vm 用于判断的组件对象
    */
    isAdopt : function(vm){
        var comp = vm.$children;//组件列表
        var isOK = true;//记录输入框组件，是否全部通过
        for(var i = 0,len = comp.length; i < len; i++){
            if(comp[i].isAdopt){
                if(!comp[i].isAdopt()){
                    isOK = false;
                }
            }
        }
        return isOK;
    },
    /**
     * 提示框
     * @param  {[type]} txt  文本内容
     * @param  {[type]} time 持续秒数
     * @param  {[type]} type success||error||loading
     * @parma callback 回调函数
     * @return {[type]}      [description]
     */
    tips: function(txt,type,time,callback) {
        var self = this;
        self.rmTips();//之前有提示框，先移除
        var tips = document.getElementById('dialog');
        if(tips) {
            return false;
        }
        tips = document.createElement('div');
        tips.id = 'dialog';
        var html = '<div class="dialog-content">';
        if(type == 'success') {
            html += '<p class="alert-success"><i class="fa fa-check"></i>'+txt+'</p>';
        } else if(type == 'error') {
            html += '<p class="alert-danger"><i class="fa fa-close"></i>'+txt+'</p>';
        }else if(type == 'loading'){
            html += '<p class="alert-info"><i class="fa fa-circle-o-notch eleCircle"></i>'+txt+'</p>';
        }
        tips.innerHTML = html;
        
        document.body.appendChild(tips);
        if(time > 0){
            setTimeout(function() {
                self.rmTips();
                if(callback){
                    callback();
                }
            },time);
        }
    },
    /**
    * 移除多话框
    */
    rmTips: function(){
        var dialog = document.getElementById("dialog");
        if(dialog != null && dialog != undefined){
            document.body.removeChild(dialog);
        }
    },
    
    //两位数格式转换 如： 1 -> 01
    formatTen : function(num) {
        return num > 9 ? (num + "") : ("0" + num); 
    },
    //标准日期格式转换
    getLocalTime : function(s,type){
        if(s) {
           var s = new Date(s);
        } else {
          var s = new Date();
        }
        var year = s.getFullYear();
        var month = s.getMonth() + 1;
        var day = s.getDate();
        var hour = s.getHours();
        var minute = s.getMinutes();
        var second = s.getSeconds();
        if(type == undefined) {
            return year + "-" +  this.formatTen(month) + "-" + this.formatTen(day);
        } else if(type == 'minute') {
             return year + "-" +  this.formatTen(month) + "-" + this.formatTen(day) + " " 
            + this.formatTen(hour) + ":" + this.formatTen(minute);
        } else if(type == 'second'){
            return year + "-" +  this.formatTen(month) + "-" + this.formatTen(day) + " " 
            + this.formatTen(hour) + ":" + this.formatTen(minute) + ":" + this.formatTen(second);
        } else if(type == 'md') {//只显示月份和天
             return this.formatTen(month) + "-" + this.formatTen(day);
        }
        
    },
    /**
    * 获取一个对象在数组中的索引
    * @param arr 数组列表
    * @param obj 判定的对象
    * @param key 判定的值
    */
    indexObjInArr : function(arr,obj,key){
        var index = -1;
        for(var i = 0,len = arr.length; i < len; i++){
            if(arr[i][key] == obj[key]){
                index = i;
                break;
            }
        }
        return index;
    },
    /**
    * 获取对象中，指定字段的 数据集合
    * @param arr 对象的集合 
    * @param key 指定读取的字段
    */
    readyValue : function(arr,key){
        var list = [];
        for(var k in arr){
            list.push(arr[k][key]);
        }
        return list;
    }
}