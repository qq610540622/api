

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
    BaseGoodsNo:String,
    stock:Number
}, {collection : 'goods_detail'});
schema.plugin(mongoosePaginate);
var goodsDetail = mongoose.model('goods_detail', schema);
exports = goodsDetail;



