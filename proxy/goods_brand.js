
var daoBase = require('./base');
var model = require('./../models').goods_brand;

var dao = {};
var goodsDao = new daoBase(model);

dao.base = goodsDao;
dao.model = model;

/**
 * 获取用户总数
 * @param callback
 */
dao.getCount = function(callback) {
    var query = this.model.find({},{_id:1}).count();
    query.exec(function(err,result) {
        if(err) callback(err,null);
        else callback(null,result);
    })
}

module.exports = dao;



