

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:Number,
    AreaNo:String,
    RackNo:Number,
    RowNo:Number,
    GoodsNo:String,
    Size:String,
    Season:{type:String,default:""}
}, {collection : 'storage'});
schema.plugin(mongoosePaginate);
var storage = mongoose.model('storage', schema);
exports = storage;



