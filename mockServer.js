/**
 * Created by welpher(welpher.yu@gmail.com) on 7/14/16.
 */
var jsonfolder = __dirname + "/src/json/";
var fs = require("fs");
var path=require("path");

var jsonServer = require('json-server');
var server = jsonServer.create();

var db = {};
var router = jsonServer.router(db);

var dataDefault = {};
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(function(req,res,next){
    var filename = "query";
    switch (req.method) {
        case 'GET':
            filename = "query";
            break;
        case 'POST':
            filename = "create";
            break;
        case 'PUT':
            filename = "save";
            break;
        case 'DELETE':
            filename = "delete";
            break;
        default:
            console.log('error method' + method);
    };
    var rpath = req.path;
    
    var apath = rpath.split("/"),spath="";
    for(var i = 0,len = apath.length;i<len;i++){
        spath += apath[i] +"/"
        if(fs.existsSync(path.join(jsonfolder,spath +filename+".json"))){
            dataDefault = require(path.join(jsonfolder,spath+filename+".json"));
        }
    }
    res.json(dataDefault);
  
    next();
});
//server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running at 3000')
})
module.exports = server;