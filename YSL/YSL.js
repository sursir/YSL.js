(function(ns){
    'use strict';

    var YSL = {
        // 基础路径
        __BASEDIR__: document.currentScript.src.replace(/\/[^\/]*$/, '/')
    };

    /**
     * 引入模块
     * @param  {string} module 要引入的模块
     * @param  {string} ns     绑定的目标命名空间
     * @param  {array} depends 声明依赖模块
     * @param  {array} params 可以传递的参数
     * @return {null}        null
     */
    YSL.import = function (module, ns, depends, params) {

        var dirmap = module.replace('.', '/');
        var module_id = module.replace('.', '_');

        var spt = document.createElement('script');
        spt.type = 'text/javascript';
        spt.async = false;
        spt.src = this.__BASEDIR__ + dirmap + '.js';

        spt.setAttribute('id', module_id);

        // 写入参数
        if (params instanceof Object)
        for (key in params) {
            if (params.hasOwnProperty(key)) {
                spt.dataset[key] = params[key];
            }
        }
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(spt, x);
    }


    /**
     * 读取一个JS脚本
     * @param  {string} url 脚本URL
     * @return {null}     没有返回值
     */
    YSL.load = function (url) {

        var spt = document.createElement('script');
        spt.type = 'text/javascript';
        spt.async = false;
        spt.src = url;

        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(spt, x);
    }

    ns.YSL = YSL;
}(window));




// var YSL = {
//     Foo : {}    // Foo 模块
// };

// console.log(document.currentScript.src);
//     var src = document.currentScript.src;
//     var reg = /[\?&]?(([^=\?\&]*)=([^=\?\&]*))[&]?/g;

// 现在问题是 `引入路径` 的问题
// 还有模块间 `依赖加载` 的问题
// **为引入的外部JS文件传递参数**

// 需要实现的模块管理功能
    // 子模块直接调用
    // 模块灵活加载   可以 RETURN

    // 模块依赖注入 ()


// ### 为引入的外部JS文件传递参数：
// 1. 通过传递与模块名称相同的ID
// 2. 通过路径后面添加`k-v`键值对 `demo.js?k=v&k2=v2`
    // console.log(document.currentScript.src); 获取当前文件的路径

// / YSL
// -- /Bar
//    -- A
//    -- B
// -- /Foo
// -- /Con
//    -- J

// -- /UserCustom

// // 添加 `Bar` 模块
// console.log(define('Bar'));
// // 添加 `H` 模块
// console.log(define('H'));