


var dao = require("../../proxy/goods");

var controller = {};
controller.index = function(req,res) {
    dao.getCount(function(err,result) {
        res.send({data:result});
    });
};


module.exports = controller;