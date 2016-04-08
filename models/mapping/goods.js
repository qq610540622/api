

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    GoodsNo:String,
    BaseGoodsNo:String,
    GoodsName:String,
    BrandEng:String,
    BrandChi:String,
    CategoryId:Number,
    Year:String,
    Season:String,
    RetailPrice:Number,
    InputTime:{ type: Date, default: Date.now }
}, {collection : 'goods'});
schema.plugin(mongoosePaginate);
var goods = mongoose.model('goods', schema);
exports = goods;



