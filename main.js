var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
 	var queryData = url.parse(_url, true).query;
	var pathname = url.parse(_url, true).pathname;
	if(pathname === '/') {
		if(queryData.id === undefined) {
			fs.readdir('./Data',"utf8" ,function(error, filelist) {

				var title = 'Welcome';
				var description = 'Hello, Node.js';
				var list = template.list(filelist);
				
				var html = template.html(title,list, ` <h2>${title}</h2> <p> ${description}</p>`,`
		<a href="/create">create</a>`);
				response.writeHead(200);
				response.end(html);
			});
		}
		else {
			fs.readdir('./Data',"utf8",function(error,filelist) {
				var filteredId = path.parse(queryData.id).base;
				fs.readFile(`Data/${filteredId}`,'utf8',function(err, description){
					var title = queryData.id;
					var sanitizedTitle = sanitizeHtml(title);
					var sanitizedDescription = sanitizeHtml(description);
					var list = template.list(filelist);
					var html = template.html(sanitizedTitle,list,` <h2>${sanitizedTitle}</h2> <p> ${sanitizedDescription}</p>`,`
		<a href="/create">create</a>
		<a href="/update?id=${sanitizedTitle}">update</a>
		<form action="delete_process" method = "post" onsubmit="console.log("deleting")"> 
			<input type="hidden" name = "id" value = "${sanitizedTitle}">
			<input type="submit" value= "delete">
		</form>
		`);
					response.writeHead(200);
					response.end(html);
				});
			});
		}
	} else if(pathname === '/create') {
		fs.readdir('./Data','utf8' ,function(error, filelist){

			var title = 'WEB - create';
			var list = template.list(filelist);

			var html = template.html(title,list,	`
				<form action="/create_process" method = "post">
					<p><input type="text" name = "title" placeholder="title"></p>
					<p>
						<textarea name = "description" placeholder = "description"></textarea>
					</p>
					<p>
						<input type="submit">	
					</p>
				</form>
			`,'');	
			
			response.writeHead(200);
			response.end(html);
		});
	}
	else if(pathname === '/create_process') {
		var body = '';
		request.on('data',function(data) {
			body = body + data;
		});
		request.on('end',function(){
			//var qs = require('querystring');
			var post = qs.parse(body);
			var title = post.title;
			var description = post.description;
			fs.writeFile(`Data/${title}`,description, 'utf8', 
				function(err) {
				response.writeHead(301, {Location: `/?id=${qs.escape(title)}`});	
				response.end();
			});
		});	
	}
	else if(pathname === "/update") {
		
		fs.readdir('./Data',"utf8",function(error,filelist) {
			var title = queryData.id;
			var filteredId = path.parse(queryData.id).base;
			fs.readFile(`Data/${filteredId}`,'utf8',function(err, description){
				var list = template.list(filelist);
				var html = template.html(title,list,
					`
					<form action="/update_process" method = "post">
						<input type = "hidden" name = "id" value = "${title}">
						<p><input type="text" name = "title" placeholder="title" value = "${title}"></p>
						<p>
							<textarea name = "description" placeholder = "description" >${description} </textarea>
						</p>	
						<p>
							<input type="submit">	
						</p>
					</form>	
					`,
					`
					<a href="/create">create</a>
					<a href="/update?id=${title}">update</a>
					`);
				response.writeHead(200);
				response.end(html);
			});
		});
	}
	else if(pathname === "/update_process"){
		var body = '';
		request.on('data',function(data) {
			body = body + data;
		});	
		request.on('end',function(){
			//var qs = require('querystring');
			var post = qs.parse(body);
			var id = post.id;
			var title = post.title;
			var description = post.description;
			fs.rename(`Data/${id}`,`Data/${title}`, function(error){
				fs.writeFile(`Data/${title}`,description, 'utf8', 
					function(err) {
					response.writeHead(301, {Location: `/?id=${qs.escape(title)}`});	
					response.end();
				});
			});
		});
	}
	else if(pathname === "/delete_process"){
		var body = '';
		request.on('data',function(data) {
			body = body + data;
		});	
		request.on('end',function(){
			var post = qs.parse(body);
			var id = post.id;
			fs.unlink(`Data/${id}`, function(error){
				response.writeHead(301,{Location : `/`});
				response.end();
			});
		});
	}
	else {
		
		response.writeHead(404);
		response.end('Not Found');
	}
});
app.listen(3000);
console.log('Node.js Server is running!');

