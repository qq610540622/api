

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    CategoryId:Number,
    CategoryName:String,
    OrderId:Number
}, {collection : 'category'});
schema.plugin(mongoosePaginate);
var category = mongoose.model('category', schema);
exports = category;



