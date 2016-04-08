

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    SpecName:String,
    SpecCode:String,
    GId:Number,
    Color:String,
    Size:String,
    Remark:{type:String,default:""},
    Sku:String,
    BaseSku:String,
    GoodsNo:String,
    BaseGoodsNo:String
}, {collection : 'goodsDetail'});
schema.plugin(mongoosePaginate);
var goodsDetail = mongoose.model('goodsDetail', schema);
exports = goodsDetail;



