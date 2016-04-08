

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    GoodsNo:String,
    ImageUrl:String
}, {collection : 'goodsImage'});
schema.plugin(mongoosePaginate);
var goodsImage = mongoose.model('goodsImage', schema);
exports = goodsImage;



