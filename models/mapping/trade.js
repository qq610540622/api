

var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var schema = new mongoose.Schema({
    Id:String,
    TradeNo:String,
    RandomNumber:String,
    ShopId:String,
    MemberMobile:String,
    TradeTime:String,
    GoodsAmount:String,
    GoodsTotal:String,
    ShopManangerValue:String,
    DiscountValue:String,
    RcvTotal:String,
    Cashier:String,
    ShoppingGuide:String,
    Type:String,
    Coupon:String,
    Score:String,
    Cash:String,
    Bank:String,
    Alipay:String,
    WeiXin:String,
    Remark:String,
    ActualValue:String,
    ChangeValue:String,
    ActivityIds:String
}, {collection : 'trade'});
schema.plugin(mongoosePaginate);
var trade = mongoose.model('trade', schema);
exports = trade;



