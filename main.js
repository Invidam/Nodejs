// hellonode1.js
/*
var server = require('http');

server.createServer(function(req, res) {
  res.writeHead(200, { 
    'Content-Type' : 'text/plain' 
  });
  res.end("Hello node.js! \n");
}).listen(3000);

console.log('Server is running at goorm.io');
*/
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
		response.writeHead(404);
		response.end();
		return;
    }
    response.writeHead(200);
	console.log(__dirname + url +'\n');
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);

console.log('Server is running at goorm.io');

/*

*/