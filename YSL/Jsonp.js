/**
 * Jsonp
 */
(function(ns){
    document.getElementById('');
    /**
     * Jsonp 进行跨域回调
     */
    function Jsonp(){
        this.url = '';
        this.callback = '';
        // 是否异步
        this.async = false;

        /**
         * 服务器端接收回调函数的标志 供服务器端识别回调函数的名称, 默认为callback
         * @type {String}
         */
        this.callTag = 'callback';
    }
    /**
     * 为回调函数绑定URL
     * @param  {string}   url      需要请求的基础URL地址
     * @param  {Function} callback 回调函数，用来处理返回信息
     * @return {null}            没有返回值
     */
    Jsonp.prototype.bindHandle = function (url, callback) {
        var randCallName = 'callback' + Math.round(Math.random()*1000);
        window[randCallName] = callback;

        // 判断 分隔符
        var separator = (url.indexOf('?') == -1) ? '?' : '&';
        this.url = url += separator + this.callTag + '=' + randCallName;

        return this;
    };
    /**
     * 进行JS脚本添加
     * @param {string} url 请求的URL链接地址
     */
    Jsonp.prototype.exec = function () {
        var spt = document.createElement('script');
        spt.type='text/javascript';
        spt.async = this.async;
        spt.src = this.url;

        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(spt, x);

        return this;
    }

    /**
     * 设置是否异步
     * @param {Boolean} isAsync 是否为异步调用
     */
    Jsonp.prototype.setAsync = function (isAsync) {
        this.async = isAsync;

        return this;
    };

    Jsonp.prototype.setCallTag = function(callTag) {
        this.callTag = callTag;

        return this;
    };

    ns.Jsonp = Jsonp;
}((typeof YSL === 'object') ? YSL : window));

// Test

// /**
//  * 需要进行的操作
//  * @param  {max} objRef 请求到的参数
//  * @return {null}        不会有返回值
//  */
// var getInJit = function(objRef){
//         console.log(objRef);
//         return objRef;
// }
// // 请求的URL地址
// var url = 'http://jit.com:8080';
// // 进行请求

// // 实例化对象
// var jsonp = new YSL.Jsonp();
// // 绑定URL, CALLBACK  // 执行
// jsonp.bindHandle(url, getInJit).exec();