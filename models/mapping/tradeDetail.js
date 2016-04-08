

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:String,
    TradeNo:String,
    CangKu:String,
    Sku:String,
    Amount:String,
    Cost:String,
    Price:String,
    Total:String,
    Remark:String,
    GoodsNo:String,
    DistributionMode:String,
    ActivityId:String
}, {collection : 'tradeDetail'});
schema.plugin(mongoosePaginate);
var tradeDetail = mongoose.model('tradeDetail', schema);
exports = tradeDetail;



