

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    CategoryId:Number,
    CategoryName:String,
    OrderId:Number
}, {collection : 'goods_category'});
schema.plugin(mongoosePaginate);
var category = mongoose.model('goods_category', schema);
exports = category;



