

var fs = require("fs");
var tools = require("../common/tools");
var cors = require("cors");

exports.route = function(app) {
    // api路由正则表达式   /api/v1.0/{control}/action/{params}
    var controllersRouteRegEx = /^\/(api)\/(v[1-9])\/([a-zA-Z0-9_\.~-]+)\/([a-zA-Z0-9_-]+)(.*)/i;
    
    //检查URL地址是否合法
    app.use(function(req,res,next) {
       if(!new RegExp(controllersRouteRegEx).test(req.url)) {
           tools.resError(98,null,res);
       } else { //合法的URL地址
           //判断access token是否合法
           var accessToken1 = require("../config").apiConfig.accessToken;
           if(req.body.accessToken || req.query.accessToken) {
               var accessToken2 = req.body.accessToken || req.query.accessToken;
               if(accessToken1 !== accessToken2) {
                   tools.resError(97,null,res);
               }
           } else {
               tools.resError(97,null,res);
           }
       }
       next();
    });
    
    //所有的GET请求
    app.get(controllersRouteRegEx, cors(), function(req,res) {
        //检查请求是否合法
        if(tools.checkReq(req, res))
        {
            //根据请求url引用对应的控制器　/controllers/v1/{control}/action/{params}
            var controller = require("../controllers/"+req.params[1]+"/"+req.params[2]);
            //根据请求url拿到action部分
            var action = req.params[3];
            //检查controller里面是否有此action
            if(controller.hasOwnProperty(action)) {
                //控制器处理请求
                controller[action](req,res);
            } else {
                //如果没有直接返回错误信息
                tools.resError(99,null,res);
            }
        } else {
            tools.resError(100,null,res);
        }
    });
    
    
    /**
     * 所有POST请求
     */
    app.post(controllersRouteRegEx,cors(),function(req,res) {
        //检查请求是否合法
        if(tools.checkReq(req, res))
        {
            //根据请求url引用对应的控制器　/controllers/v1/{control}/action/{params}
            var controller = require("../controllers/"+req.params[1]+"/"+req.params[2]);
            //根据请求url拿到action部分
            var action = req.params[3];
            //检查controller里面是否有此action
            if(controller.hasOwnProperty(action)) {
                //控制器处理请求
                controller[action](req,res);
            } else {
                //如果没有直接返回错误信息
                tools.resError(99,null,res);
            }
        } else {
            tools.resError(100,null,res);
        }
    });
}

