/**
 * Created by Administrator on 2016-02-17.
 */


var async = require("async");
var goodsDao = require("../../proxy/goods");
var brandDao = require("../../proxy/goods_brand");

var controller = {};

/**
 * 文章后台首页
 * @param req
 * @param res
 */
controller.index = function(req,res) {
    goodsDao.base.getSingleByQuery({GoodsNo:"BG560164"},function(err,result) {
        if(err) res.send("error");
        else res.send(result);
    });
}


/**
 * 添加与修改视图
 * @param req
 * @param res
 */
controller.operate = function(req,res) {
    async.waterfall([
        function(callback) {
            goodsDao.base.getSingleByQuery({GoodsNo:"BG560164"},function(err,result) {
                callback(err,result);
            });
        },
        function(arg,callback) {
            brandDao.base.getSingleByQuery({BrandEN:arg.BrandEng},function(err,result) {
                callback(err,result);
            });
        }
    ],function(err,results) {
        console.log(results);
        res.send(results);
    });
}




controller.create = function(req,res) {
    
    
    
    res.send("brand");
}


module.exports = controller;



