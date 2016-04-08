
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//路由
require("./routes/index").route(app);

var port = process.env.PORT || 8080;
app.listen(port);
console.log("server running to %s", port);




// var async = require("async");
// var count1 = 0; 
// async.whilst( 
//     function() { return count1 < 3 }, 
//     function(cb) { 
//         console.log('1.1 count: ', count1); 
//         count1++; 
//         setTimeout(cb, 1000); 
//     }, 
//     function(err) { 
//         // 3s have passed 
//         console.log('1.1 err: ', err); // -> undefined 
//     } 
// );


module.exports = app;
