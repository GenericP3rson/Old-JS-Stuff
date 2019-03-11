var http = require('http');
var dt = require('./date');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The DATE and the TIME is " + dt.myDateTime());
    res.end();
}).listen(8080);
