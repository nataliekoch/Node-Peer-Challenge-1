/**
 * Created by natalie on 10/27/15.
 */
var http = require('http');
var dollar = require('./moneyConvert');
var num = require('./ranNumGen');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(dollar());
    response.end();
}).listen(8000);

module.exports = http;