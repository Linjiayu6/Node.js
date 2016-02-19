var http = require('http');
var head={'Content-Type': 'text-plain'};


http.createServer(function(req,res){
   res.writeHead(200,head);
   res.write('<h1>....</h1>');
   res.end('<h1>........end</h1>');
}).listen(3000);
console.log("HTTP server is listening at port http://localhost:3000.");