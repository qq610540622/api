

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    BrandEN:String,
    BrandCN:String,
    OrderId:Number
}, {collection : 'goods_brand'});
schema.plugin(mongoosePaginate);
var brand = mongoose.model('goods_brand', schema);
exports = brand;



