/**
 * Created by Administrator on 2016-02-17.
 */


var controller = {};

/**
 * 文章后台首页
 * @param req
 * @param res
 */
controller.index = function(req,res) {
    res.send("articleIndex");
}


/**
 * 添加与修改视图
 * @param req
 * @param res
 */
controller.operate = function(req,res) {
    res.send("OK");
}


module.exports = controller;



