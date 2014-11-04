/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
app.set('port', process.env.PORT || 8888);
app.get('/', function(req, res) {
    var ip=req.connection.remoteAddress,ips=[],data={};
    data.ip=ip;
    if(ip){
        ips=ip.split(".");
    }
    if(ips.length==4){
        if(ips[2]!=180){
           data.city="上海市";
        }else{
           data.city="沈阳市";
        }
    }
	res.set("Content-Type", "application/x-javascript");
    res.send("var returnIpAddress="+JSON.stringify(data));
});

var server = http.createServer(app);

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
