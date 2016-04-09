

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    GoodsNo:String,
    ImageUrl:String
}, {collection : 'goods_image'});
schema.plugin(mongoosePaginate);
var goodsImage = mongoose.model('goods_image', schema);
exports = goodsImage;



